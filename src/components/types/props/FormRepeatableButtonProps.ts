import TailwindClass from "@/components/types/TailwindClass";
import React from "react";

type FormRepeatableButtonProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    className?: TailwindClass,
    children?: React.ReactNode | React.ReactNode[] | string,
}

export default FormRepeatableButtonProps