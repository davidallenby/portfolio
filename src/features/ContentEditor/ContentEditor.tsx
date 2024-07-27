import React, { FC, useState } from 'react';
import './ContentEditor.scss';
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from '@tiptap/react';
import ContentEditorToolbar from './components/ContentEditorToolbar/ContentEditorToolbar';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading'
import Placeholder from '@tiptap/extension-placeholder'

interface ContentEditorProps {
  onChange: (e: any) => void;
}

const ContentEditor: FC<ContentEditorProps> = () => {
  // Editor State
  const [text, setText] = useState<string>('');
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
    // Placeholder
    Placeholder.configure({ 
      placeholder: `Start writing here...

Non eu aliquip do esse labore dolor aliqua adipisicing tempor. Cillum deserunt laboris esse et aute eu magna cillum non sunt. Excepteur proident ea et ut laboris anim eiusmod aute voluptate tempor
labore ad amet.

Nostrud magna esse commodo magna veniam occaecat quis consectetur magna ea Lorem commodo.` 
    })
  ]

  const editor = useEditor({
    extensions,
    content: text,
    immediatelyRender: false,
    onUpdate: (e: any) => {
      console.log(e)
    }
  })
  return (
    <div className="ContentEditor">
      <BubbleMenu editor={editor}>
        <ContentEditorToolbar editor={editor} />
      </BubbleMenu>
      <FloatingMenu editor={editor}>
        <ContentEditorToolbar editor={editor} />
      </FloatingMenu>
      <EditorContent editor={editor} 
      />      
    </div>
  );
}

export default ContentEditor;
