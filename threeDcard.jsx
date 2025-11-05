"use client";

import { CardContainer, CardBody, CardItem } from "../IMPORTS/cards"; // adjust path
import { cn } from "../lib/utils";

export  function ThreeDCard() {
  return (
    <CardContainer containerClassName="max-w-lg">
      <CardBody className="bg-white rounded-2xl shadow-lg p-6">
        {/* Image inside CardItem */}
        <CardItem
          translateZ={70}
          className="w-full h-48 mb-4 rounded-xl overflow-hidden"
        >
          <img
            src="feat1.png"   // 👉 place image inside your public/images folder
            alt="Farm"
            className="object-cover w-full h-full"
          />
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-xl font-bold text-gray-800 mb-2"
        >
        Add places from guides with 1 click
        </CardItem>

        <CardItem translateZ={30} className="text-gray-600 mb-4">
          We crawled the web so you don’t have to. Easily add mentioned places to your plan.
        </CardItem>

        <CardItem translateZ={60}>
          <button
            className={cn(
              "px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            )}
          >
            Explore
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCard2() {
  return (
    <CardContainer containerClassName="max-w-lg">
      <CardBody className="bg-white rounded-2xl shadow-lg p-6">
        {/* Image inside CardItem */}
        <CardItem
          translateZ={70}
          className="w-full h-48 mb-4 rounded-xl overflow-hidden"
        >
          <img
            src="feat2.png"   // 👉 place image inside your public/images folder
            alt="Farm"
            className="object-cover w-full h-full"
          />
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-xl font-bold text-gray-800 mb-2"
        >
          Expense tracking and splitting
        </CardItem>

        <CardItem translateZ={30} className="text-gray-600 mb-4">
          Keep track of your budget and split the cost between your tripmates.
        </CardItem>

        <CardItem translateZ={60}>
          <button
            className={cn(
              "px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            )}
          >
            Explore
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


export function ThreeDCard3() {
  return (
    <CardContainer containerClassName="max-w-lg">
      <CardBody className="bg-white rounded-2xl shadow-lg p-6">
        {/* Image inside CardItem */}
        <CardItem
          translateZ={70}
          className="w-full h-48 mb-4 rounded-xl overflow-hidden"
        >
          <img
            src="feat3.png"   // 👉 place image inside your public/images folder
            alt="Farm"
            className="object-cover w-full h-full"
          />
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-xl font-bold text-gray-800 mb-2"
        >
          Collaborate with friends in real time
        </CardItem>

        <CardItem translateZ={30} className="text-gray-600 mb-4">
          Plan along with your friends with live syncing.
        </CardItem>

        <CardItem translateZ={60}>
          <button
            className={cn(
              "px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            )}
          >
            Explore
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCard4() {
  return (
    <CardContainer containerClassName="max-w-lg">
      <CardBody className="bg-white rounded-2xl shadow-lg p-6">
        {/* Image inside CardItem */}
        <CardItem
          translateZ={70}
          className="w-full h-48 mb-4 rounded-xl overflow-hidden"
        >
          <img
            src="feat4.png"   // 👉 place image inside your public/images folder
            alt="Farm"
            className="object-cover w-full h-full"
          />
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-xl font-bold text-gray-800 mb-2"
        >
          Checklists for anything
        </CardItem>

        <CardItem translateZ={30} className="text-gray-600 mb-4">
          Stay organized with a packing list, to-do list, shopping list, any kind of list
        </CardItem>

        <CardItem translateZ={60}>
          <button
            className={cn(
              "px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            )}
          >
            Explore
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCard5() {
  return (
    <CardContainer containerClassName="max-w-lg">
      <CardBody className="bg-white rounded-2xl shadow-lg p-6">
        {/* Image inside CardItem */}
        <CardItem
          translateZ={70}
          className="w-full h-48 mb-4 rounded-xl overflow-hidden"
        >
          <img
            src="feat5.png"   // 👉 place image inside your public/images folder
            alt="Farm"
            className="object-cover w-full h-full"
          />
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-xl font-bold text-gray-800 mb-2"
        >
          Get personalized recommendations
        </CardItem>

        <CardItem translateZ={30} className="text-gray-600 mb-4">
          Find the best places to visit with smart recommendations based on your itinerary.
        </CardItem>

        <CardItem translateZ={60}>
          <button
            className={cn(
              "px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            )}
          >
            Explore
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


export function ThreeDCard6() {
  return (
    <CardContainer containerClassName="max-w-lg">
      <CardBody className="bg-white rounded-2xl shadow-lg p-6">
        {/* Image inside CardItem */}
        <CardItem
          translateZ={70}
          className="w-full h-48 mb-4 rounded-xl overflow-hidden"
        >
          <img
            src="feat6.png"   // 👉 place image inside your public/images folder
            alt="Farm"
            className="object-cover w-full h-full"
          />
        </CardItem>

        <CardItem
          translateZ={50}
          className="text-xl font-bold text-gray-800 mb-2"
        >
        Import flight & hotel reservations
        </CardItem>

        <CardItem translateZ={30} className="text-gray-600 mb-4 ">
          Connect or forward your emails to get it magically added into your trip plan.
        </CardItem>

        <CardItem translateZ={60}>
          <button
            className={cn(
              "px-4 py-2 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition"
            )}
          >
            Explore
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


