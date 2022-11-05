/* eslint-disable @typescript-eslint/no-explicit-any */
// Type Error

import { useCallback, useEffect, useState } from 'react'

export type TError = {
    message: string
    code: number
}

type TOptions<S extends (...args: Parameters<S>) => Promise<any>> = {
    init?: boolean
    params?: Parameters<S>
}

export const useService = <S extends (...args: Parameters<S>) => Promise<any>>(
    service: S,
    { init = false, params }: TOptions<S> | undefined = {},
) => {
    // States
    const [loading, setLoading] = useState(false)
    const [called, setCalled] = useState(false)
    const [error, setError] = useState<TError | undefined>(undefined)

    /**
     * Función que ejecuta el servicio
     * @param {T} args argumentos del servicio
     * @returns {void}
     */
    const getService: (...args: Parameters<S>) => Promise<Awaited<ReturnType<S>>> = useCallback(
        async (...args: any) => {
            try {
                setLoading(true)
                const res = await service(...(args?.length ? args : params || ([] as unknown as any)))

                setLoading(false)
                setCalled(true)
                setError(undefined)

                return res
            } catch (err: any) {
                setLoading(false)
                setError({
                    message: err?.message || 'Se ha producido un error',
                    code: err?.code || 404,
                })
                throw Error(err)
            }
        },
        [service],
    )

    /**
     * Función que reinicia los estados
     * @returns {void}
     */
    const reset = useCallback(() => {
        setLoading(false)
        setCalled(false)
        setError(undefined)
    }, [])

    // Efecto que ejecuta el servicio cuando se monta el componente
    useEffect(() => {
        init && getService(...((params || []) as Parameters<S>))
    }, [])

    return { loading, called, error, fn: getService, reset }
}
