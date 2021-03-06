import { gradients } from '@/utils/gradients'
import React from 'react'
import { Caption, IconContainer } from './common'
import styles from './Hero.module.css'
import { ReactComponent as Icon } from '@/img/icons/home/component-driven.svg'

export function Open({isChinese} = props) {
    const pin = 'left'
    return (
        <>
            <div className="mb-0 ml-4" style={{marginTop: '65px'}}>
                <IconContainer className={`${gradients.amber[0]}`}>
                    <Icon />
                </IconContainer>
            </div>
            <div style={{marginBottom: '0px',marginTop: '-10px'}} className="ml-4">
                <Caption as="h2" className="text-amber-500">
                    {isChinese === true ?  '开源生态' : 'OPEN'}
                </Caption>
            </div>

            <div className={`grid ${styles.layout}`} style={{marginTop: '-10px'}}>
                <div
                    className={`col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full row-start-1 row-span-full xl:col-start-1 xl:col-end-5 xl:row-start-2 xl:row-end-5 lg:py-10 xl:py-16 flex ${pin === 'left' ? '-ml-8 pr-4 sm:ml-0 sm:pr-0' : '-mr-8 pl-4 sm:mr-0 sm:pl-0'
                        }`}
                >
                    <div className="bg-gray-100 w-full flex-none rounded-3xl" />
                    <div className="w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 -rotate-1 sm:-rotate-1" />
                </div>
                <div
                    className={`relative col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full xl:col-start-2 xl:col-end-3 row-start-2 row-end-3 xl:row-start-3 xl:row-end-4 self-center ${pin === 'left' ? 'pr-8' : 'pl-8'
                        } sm:px-6 md:px-8 pb-6 md:pb-8 lg:px-0 lg:pb-0 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-32 xl:mt-0`}
                >
                    <div
                        className={`${styles.cardContainer} max-w-xl xl:max-w-none flex items-center justify-center`}
                    >
                        <div className="w-full flex-none">
                            <figure className="md:flex bg-amber-50 rounded-xl p-8 md:p-0">
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <blockquote>
                                        <p className="text-lg font-semibold text-amber-500">
                                            {isChinese === true ? 'Datav是完全开源的，没有企业版本，也没有云服务，我们就是一个100%开源的产品'  :'Data is completely open source, no enterprise, no cloud, 100% open!'}
                                        </p>
                                    </blockquote>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="relative md:px-8 lg:px-0 col-start-1 col-span-full lg:col-start-1 xl:col-start-3 xl:col-end-4 row-start-1 row-end-2 xl:row-start-2 xl:row-end-5 self-center pt-8 lg:pt-0">
                    <div className="mx-auto lg:max-w-2xl xl:max-w-none ml-16">
                        <img src={require('@/img/open-image.svg').default} style={{ height: '300px' }} className="rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}
