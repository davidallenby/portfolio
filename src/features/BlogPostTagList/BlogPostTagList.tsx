import React, { FC, useEffect, useState } from 'react';
import './BlogPostTagList.scss';
import { useMutation } from '@tanstack/react-query';
import { createTag, } from '@lib/firebase/firestore';
import Chip from '@components/ui/Chip/Chip';
import { QUERY } from '@constants/query';
import { BiEdit } from 'react-icons/bi';
import Modal from '@components/ui/Modal/Modal';
import Creatable from 'react-select/creatable';
import { queryClient } from '@context/ReactQueryProvider';
import { useGetTags } from '../../hooks/blog';
import { BlogPostTag } from '@interfaces/blog.interfaces';

interface BlogPostTagListProps {
  tagIds: string[] | undefined;
  enableEdit?: boolean;
  onEditClick?: (e: any) => void;
}


export interface BlogPostTagOption {
  readonly label: string;
  readonly id: string;
}




const BlogPostTagList: FC<BlogPostTagListProps> = ({
  tagIds, enableEdit
}) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);
  // Queries
  const { isLoading, isError, isSuccess, data } = useGetTags();
  // 
  const [value, setValue] = useState<BlogPostTagOption[] | null>([]);
  const [options, setOptions] = useState<BlogPostTagOption[]>([]);

  useEffect(() => {
    if (!data) { return; }
    setOptions([...data.map(item => ({
      ...item
    }))])
  }, [data])

  // Mutations
  const mutation = useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY.IDS.BLOG_POST_TAGS] })
    },
  })


  return (
    <div className="BlogPostTagList d-flex align-items-center">
      {
        isLoading && <p>LOADING TAGS</p>
      }
  
      {
        isError && <p className='text-danger mb-0'>Error fetching tags</p>
      }
  
      {
        isSuccess && <>
          {tagIds?.map((id, i) => {
          const found = data.find((tag) => tag.id === id);
          return found ? <Chip className="me-4 mb-3" key={i}
            onDismiss={() => console.log('HE')}
          >
          {found.label}
        </Chip> : false;
        })} { enableEdit && <button type='button' 
          className='mb-3 d-inline-flex align-items-center btn btn-sm'
          onClick={() => setIsEditing(true)}
        >
          <BiEdit className='me-2' />
          <span>Add Tags</span>
        </button>}

        <Modal 
          title="Add / Remove Tags"
          show={isEditing}
          onClose={setIsEditing}
        >
          <Creatable 
            isDisabled={isLoading} 
            options={options} 
            value={value}
            onCreateOption={mutation.mutate}
            onChange={(e) => {
              console.log(data)
              console.log('CHANGE' ,e)
              setValue([...e])

            }}
            isMulti
            isClearable
          />
        </Modal>
        </>
      }
    </div>
  );
}

export default BlogPostTagList;
