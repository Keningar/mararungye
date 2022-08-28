import React from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineWarning } from "react-icons/ai";

export default function ModalMessage() {
  let [isOpen, setIsOpen] = React.useState(true);

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-2xl bg-white p-6">
          <Dialog.Title>
            <AiOutlineWarning className="w-10 h-10 text-amber-200" />
          </Dialog.Title>
          <Dialog.Description className="mt-2">
            Ya no se aceptan inscripciones por medio de la plataforma acercarse
            el día viernes 19 de agosto al punto de entrega de kit.
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
