import React, { FC, useCallback } from 'react';
import './ContentEditorToolbar.scss';
import ContentEditorToolbarButton from '../ContentEditorToolbarButton/ContentEditorToolbarButton';
import { BiBold, BiItalic, BiLink, BiStrikethrough, BiUnlink } from 'react-icons/bi';
import { Editor } from '@tiptap/react';

interface ContentEditorToolbarProps {
  editor: Editor|null
}

const ContentEditorToolbar: FC<ContentEditorToolbarProps> = ({
  editor
}) => {

  
  const setLink = useCallback(() => {
    if (!editor) { return; }
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
  
    // cancelled
    if (url === null) { return }
  
    // empty URL (unset the link)
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
  
    // update link
    editor.chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run()
  }, [editor])
  
  // If the editor objeect hasn't been created abort here
  if (!editor) { return null }
  return (
  <div className="ContentEditorToolbar d-flex align-items-center bg-primary shadow">
    <ContentEditorToolbarButton
      className={`${editor.isActive('bold') ? 'ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => editor.chain().toggleBold().run()}
    >
      <BiBold />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className={`${editor.isActive('italic') ? 'ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => editor.chain().toggleItalic().run()}
    >
      <BiItalic />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className={`me-4${editor.isActive('strike') ? ' ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => editor?.chain().toggleStrike().run()}
    >
      <BiStrikethrough />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className={`${editor.isActive('heading', { level: 2 }) ? 'ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => {
        editor?.chain().toggleHeading({ level: 2 }).run()
      }}
    >
      <span style={{ 
        fontSize: 18,
        fontFamily: 'hk_grotesk_med'
      }}>H2</span>
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className={`${editor.isActive('heading', { level: 3 }) ? 'ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => {
        editor?.chain().toggleHeading({ level: 3 }).run()
      }}
    >
      <span style={{ 
        fontSize: 16 ,
        fontFamily: 'hk_grotesk_med'
      }}>H3</span>
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className={`me-4${editor.isActive('heading', { level: 4 }) ? ' ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => {
        editor?.chain().toggleHeading({ level: 4 }).run()
      }}
    >
      <span style={{
        fontSize: 14,
        fontFamily: 'hk_grotesk_med'
      }}>H4</span>
    </ContentEditorToolbarButton>
    {/* LINK TEXT */}
    <ContentEditorToolbarButton
      onClick={setLink}
    >
      <BiLink />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className='me-4'
      onClick={editor.chain().unsetLink().run}
    >
      <BiUnlink />
    </ContentEditorToolbarButton>

  </div>
  )
}

export default ContentEditorToolbar;
