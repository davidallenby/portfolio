import Chip from "@components/ui/Chip/Chip";
import { QUERY } from "@constants/query";
import { queryClient } from "@context/ReactQueryProvider";
import { objectSort } from "@helpers/common";
import { useGetTags } from "@hooks/blog";
import { BlogPostTag } from "@interfaces/blog.interfaces";
import { createTag } from "@lib/firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { MultiSelect } from "primereact/multiselect";
import { createRef, ReactNode, useEffect, useState } from "react";
// TODO: Move this out into a multiselect component. Customise the styles for
// TODO: this dropdown specifically.
import './EditPostTagsMultiselect.scss';

export default function EditPostTagsMultiselect({ }) {
  // Multiselect reference
  const ref: React.RefObject<any> = createRef();

  // Queries
  const { isLoading, isError, isSuccess, data } = useGetTags();
  // Selected items
  const [selected, setSelected] = useState<BlogPostTag[]>([]);
  // Options
  const [options, setOptions] = useState<BlogPostTag[]>([])
  // Creating tag spinner
  const [creating, setCreating] = useState<boolean>(false);

  // TODO: I need to get the current post data in here and update the default
  // TODO: items with whatever is attached to the current post.
  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      setOptions(data)
      data.sort(objectSort('label'))
    }
  }, [data, isSuccess])

  // Mutations
  const mutation = useMutation({
    mutationFn: createTag,
    onSuccess: async (newTagId) => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ 
        queryKey: [QUERY.IDS.BLOG_POST_TAGS]
      })
      return newTagId;
    },
  })

  /**
   * Fired when the list of selected tags is updated
   * @param e 
   */
    const tagChangeHandler = ({ value }: { 
      value: BlogPostTag[]
    }) => setSelected(value)

  /**
   * Creates the empty state template for the filter. When the user searches for
   * a tag item, and nothing appears. It will show this empty message with a
   * button that allows the user to create a tag from the filter value
   * @param e 
   * @returns 
   */
  const emptyState = (e: any) => {
    const filterValue = e.filterValue;
    return (
      <div className='d-flex align-items-center flex-wrap px-3'>
        <p className='mb-0 me-1'>No result found. </p>
        <button type="button" 
          disabled={creating}
          onClick={(e) => createTagHandler(filterValue)}
          className={'p-0 bg-transparent border-0 text-primary btn-link text-decoration-none'}
        >
          Create tag from filter
        </button>
      </div>
    );
  };

  /**
   * Creates the template for the selected items in the multi select dropdown
   *
   * @param {BlogPostTag} option
   * @return {*} 
   */
  const selectedItemTemplate = (option: BlogPostTag): ReactNode => {
    if (!option) { return; }
      return <Chip onDismiss={(e) => removeItem(option)}
        className='me-3 my-2'
      >
        { option?.label }
      </Chip>;
  };

  /**
   * Fired when the user clicks "create new tag" button. It will add a new tag
   * to the data base, then react-query will invalidate and update the list of
   * tags
   *
   * @param {string} label
   */
  const createTagHandler = async (label: string) => {
    setCreating(true);
    await mutation.mutateAsync(label)
    setCreating(false);            
  }

  /**
   * When the user clicks the "dismiss" icon on each chip. It should remove the
   * item from the list. This function handles updating the selected items array
   *
   * @param {BlogPostTag} clicked
   */
  const removeItem = (clicked: BlogPostTag) => {
    const filtered = selected.filter((item) => item.id !== clicked.id);
    setSelected(filtered);
  }  

  return (
    <MultiSelect
      ref={ref}
      filter
      panelClassName="MultiSelect__panel"
      resetFilterOnHide
      style={{ width: '100%' }}
      value={selected} 
      options={data ? [...data] : []} 
      onChange={tagChangeHandler} 
      optionLabel="label" 
      placeholder="Select tags" 
      selectedItemTemplate={selectedItemTemplate}
      emptyFilterMessage={emptyState} 
      className="w-full md:w-20rem" 
      display="chip" 
    />
  );
}