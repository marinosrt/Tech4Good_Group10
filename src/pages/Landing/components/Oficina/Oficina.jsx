import React from "react";
import { Card } from './Oficina.styles'
import img1 from 'assets/img/oficina1.jpg'

const Oficina = () => {
    return (

        <section>
            <div class="container">
                <div class="flex flex-col w-full">
                    <h2>La Oficina</h2>
                    <p class="lg:w-2/3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum reiciendis, repudiandae laboriosam dolorem consectetur distinctio quo harum tempora odit alias a aliquid veritatis ab neque nulla nostrum provident molestias mollitia!</p>
                </div>
                <div class="flex flex-wrap">
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative h-80 ">
                            <img alt="oficina" class="absolute inset-0 w-full h-full object-cover object-center" src={img1} />
                            <Card>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione totam minima aut, nihil dolor corporis optio cumque excepturi blanditiis facilis natus consectetur quisquam deserunt odit porro! Accusamus, tempore doloribus?</p>
                            </Card>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative h-80 ">
                            <img alt="oficina" class="absolute inset-0 w-full h-full object-cover object-center" src={img1} />
                            <Card>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione totam minima aut, nihil dolor corporis optio cumque excepturi blanditiis facilis natus consectetur quisquam deserunt odit porro! Accusamus, tempore doloribus?</p>
                            </Card>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative h-80 ">
                            <img alt="oficina" class="absolute inset-0 w-full h-full object-cover object-center" src={img1} />
                            <Card>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione totam minima aut, nihil dolor corporis optio cumque excepturi blanditiis facilis natus consectetur quisquam deserunt odit porro! Accusamus, tempore doloribus?</p>
                            </Card>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative h-80 ">
                            <img alt="oficina" class="absolute inset-0 w-full h-full object-cover object-center" src={img1} />
                            <Card>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione totam minima aut, nihil dolor corporis optio cumque excepturi blanditiis facilis natus consectetur quisquam deserunt odit porro! Accusamus, tempore doloribus?</p>
                            </Card>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative h-80 ">
                            <img alt="oficina" class="absolute inset-0 w-full h-full object-cover object-center" src={img1} />
                            <Card>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione totam minima aut, nihil dolor corporis optio cumque excepturi blanditiis facilis natus consectetur quisquam deserunt odit porro! Accusamus, tempore doloribus?</p>
                            </Card>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative h-80 ">
                            <img alt="oficina" class="absolute inset-0 w-full h-full object-cover object-center" src={img1} />
                            <Card>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione totam minima aut, nihil dolor corporis optio cumque excepturi blanditiis facilis natus consectetur quisquam deserunt odit porro! Accusamus, tempore doloribus?</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Oficina;