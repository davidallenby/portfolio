import React, { FC, useState } from 'react';
import './ContentEditor.scss';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import ContentEditorToolbar from './components/ContentEditorToolbar/ContentEditorToolbar';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { CONTENT_EDITOR } from './constants';

interface ContentEditorProps {
  onChange: (e: any) => void;
}

const ContentEditor: FC<ContentEditorProps> = ({ onChange }) => {
  // Editor State
  const [content, setContent] = useState<string>('');
  // Extension for TipTap Editor
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false,
      }
    }),
    // Headings
    Heading.configure({ levels: [2,3,4] }),
    // Link Text
    Link.configure({
      openOnClick: false,
      autolink: true,
      defaultProtocol: 'https',
    }),
    // Placeholder
    Placeholder.configure({  placeholder: CONTENT_EDITOR.PLACEHOLDER })
  ]

  const editor = useEditor({
    extensions,
    content: content,
    immediatelyRender: false,
    onUpdate: onChange
  })

  return (
    <div className="ContentEditor">
      <BubbleMenu editor={editor}>
        <ContentEditorToolbar editor={editor} />
      </BubbleMenu>
      <EditorContent editor={editor} 
      />      
    </div>
  );
}

export default ContentEditor;
