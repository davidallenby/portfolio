import BlogTagCloudFilter from '@components/ui/BlogTagCloudFilter/BlogTagCloudFilter'
import Button from '@components/ui/Button/Button'
import ClearAllTagsButton from '@components/ui/ClearAllTagsButton/ClearAllTagsButton'
import Modal from '@components/ui/Modal/Modal'
import { type FC, useCallback, useMemo, useState } from 'react'
import { MdFilterList } from 'react-icons/md'

const BlogFiltersMobile: FC = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = useCallback(
    (bool: boolean) => () => {
      console.log('handleToggle', bool)
      setOpen(bool)
    },
    []
  )

  const closeButtonProps = useMemo(
    () => ({
      children: 'Close',
      onClick: handleToggle(false)
    }),
    [handleToggle]
  )

  const handleDismiss = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <Button
        size='sm'
        leftIcon={<MdFilterList size={16} />}
        variant='secondary'
        className='flex items-center me-3'
        onClick={handleToggle(!open)}
      >
        <span>Tags</span>
      </Button>
      <Modal
        isOpen={open}
        title='Filter by tag'
        onDismiss={handleDismiss}
        secondaryButtonProps={closeButtonProps}
      >
        <ClearAllTagsButton className='mb-6' />
        <BlogTagCloudFilter />
      </Modal>
    </>
  )
}

export default BlogFiltersMobile
