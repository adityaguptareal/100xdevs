import { useEffect } from "react";
import { useState, useRef } from "react";
import React from "react";
export function usePrev(value) {
    const prevValue = useRef()
    useEffect(() => {
        prevValue.current = value
    },[value])
    return prevValue.current
}