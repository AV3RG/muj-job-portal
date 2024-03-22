import FormRepeatableButtonProps from "@/components/types/props/FormRepeatableButtonProps";
import React, {Children} from "react";
import {cn} from "@/lib/utils";

export default function GenericRepeatableButton(props: FormRepeatableButtonProps) {
    return <button className={cn("border rounded-md p-1.5", props.className)} onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
    }}>
        {Children.map(props.children, child => {
            return child
        })}
    </button>
}

export function GenericAddButton(props: {
    size: number,
    setSize: (size: number) => void
}) {
    return <GenericRepeatableButton className={"border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"} onClick={(e) => {
        e.preventDefault();
        props.setSize(props.size + 1);
    }}>
        Add New
    </GenericRepeatableButton>
}

export function GenericRemoveButton(props: {
    size: number,
    setSize: (size: number) => void
}) {
    return <GenericRepeatableButton className={"border-red-500 text-red-500 hover:bg-red-500 hover:text-white"} onClick={(e) => {
        e.preventDefault();
        if (props.size == 1) return;
        props.setSize(props.size - 1);
    }}>
        Remove Last
    </GenericRepeatableButton>
}
