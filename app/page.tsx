"use client"
import {Modal} from "@/components/ui/modal";


export default function Home() {
  return (
    <div>
        <Modal title="Test" description="test" onClose={()=>{}} isOpen>
            children
        </Modal>

    </div>
  )
}
