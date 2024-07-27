import React, { FC } from 'react';
import './ContentEditorToolbar.scss';
import ContentEditorToolbarButton from '../ContentEditorToolbarButton/ContentEditorToolbarButton';
import { BiBold, BiHeading, BiItalic, BiStrikethrough } from 'react-icons/bi';
import { Editor } from '@tiptap/react';

interface ContentEditorToolbarProps {
  editor: Editor|null
}

const ContentEditorToolbar: FC<ContentEditorToolbarProps> = ({
  editor
}) => (
  <div className="ContentEditorToolbar d-flex align-items-center bg-primary shadow">
    <ContentEditorToolbarButton
      className={`${editor?.isActive('bold') ? 'ContentEditorToolbarButton--active' : ''}`}
      onClick={(e) => editor?.chain().toggleBold().run()}
    >
      <BiBold />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      onClick={(e) => editor?.chain().toggleItalic().run()}
    >
      <BiItalic />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      className='me-4'
      onClick={(e) => editor?.chain().toggleStrike().run()}
    >
      <BiStrikethrough />
    </ContentEditorToolbarButton>
    <ContentEditorToolbarButton
      onClick={(e) => {
        editor?.chain().toggleHeading({ level: 2 }).run()
      }}
    >
      <BiHeading />
    </ContentEditorToolbarButton>
    
  </div>
);

export default ContentEditorToolbar;
