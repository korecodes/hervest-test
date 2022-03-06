import React, { useState, useEffect } from 'react';
import {
  FarmVector,
  InviteVector,
  Piggybank,
  SavingsVector,
  Shape,
  ShapeSecond,
  Stripe,
} from '../assets/svgs';

const Dashboard = () => {
  const [width, setWidth] = useState('');
  useEffect(() => {
    const widthSize = () => {
      setWidth('40');
    };
    widthSize();
  }, [width]);

  const meter = {
    width: width + '%',
    backgroundColor: '#265859',
  };
  return (
    <>
      <div
        style={{ backgroundColor: '#FAFAFA' }}
        className="h-screen w-4/5 px-10"
      >
        <div className="pt-10 flex items-center space-x-3">
          <div className="bg-gray-400 w-14 h-14 rounded-full"></div>
          <div className="flex flex-col">
            <p className=" font-light text-gray-400">Hello,</p>
            <h1 className="text-xl text-gray-400 font-bold ">Oluwatobi</h1>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#E2698D' }}
          className="rounded-md w-full h-48 mt-7 relative"
        >
          <div className="absolute bottom-0">
            <Shape />
          </div>
          <div className="absolute right-64">
            <ShapeSecond />
          </div>
          <div className="absolute bottom-0 right-48">
            <Stripe />
          </div>
          <div className="absolute top-1/4 px-10 grid grid-cols-4 mx-auto w-full">
            <div className="grid-cols-1 flex flex-col items-center">
              <h1 className="text-white font-extralight">Available Balance</h1>
              <p className="text-white text-lg font-extrabold mt-2">
                ₦1,063,345.04
              </p>
            </div>
            <div className="grid-cols-1  flex flex-col items-center">
              <h1 className="text-white font-extralight">Available Balance</h1>
              <p className="text-white text-lg font-extrabold mt-2">
                ₦1,063,345.04
              </p>
            </div>
            <div className="grid-cols-1  flex flex-col items-center">
              <h1 className="text-white font-extralight">Available Balance</h1>
              <p className="text-white text-lg font-extrabold mt-2">
                ₦1,063,345.04
              </p>
            </div>
            <div className="grid-cols-1  flex flex-col items-center">
              <h1 className="text-white font-extralight">Available Balance</h1>
              <p className="text-white text-lg font-extrabold mt-2">
                ₦1,063,345.04
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl text-gray-400 font-bold ">
            Watch your plans
          </h1>
          <p className="text-gray-400 text-md leading-10 font-extralight">
            A goal without a plan is just a wish
          </p>
          <div className="flex space-x-8 mt-5">
            <div className="bg-white rounded-lg w-2/6 h-48 border-2 px-5 py-5">
              <div className="flex items-center space-x-3">
                <div
                  style={{ backgroundColor: '#C2EFF0' }}
                  className="w-14 h-14 rounded-full flex justify-center items-center"
                >
                  <Piggybank />
                </div>
                <p className="text-lg font-light">Saving for Rainy days</p>
              </div>
              <h1 className="mt-5 font-extrabold text-3xl">N400.00</h1>
              <div className="w-full bg-gray-200 h-1 mt-5">
                <div style={meter} className="h-1"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg w-2/6 h-48 border-2 px-5 py-5">
              <div className="flex items-center space-x-3">
                <div
                  style={{ backgroundColor: '#C2EFF0' }}
                  className="w-14 h-14 rounded-full flex justify-center items-center"
                >
                  <Piggybank />
                </div>
                <p className="text-lg font-light">Saving for Rainy days</p>
              </div>
              <h1 className="mt-5 font-extrabold text-3xl">N400.00</h1>
              <div className="w-full bg-gray-200 h-1 mt-5">
                <div style={meter} className="h-1"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg w-2/6 h-48 border-2 px-5 py-5">
              <div className="flex items-center space-x-3">
                <div
                  style={{ backgroundColor: '#C2EFF0' }}
                  className="w-14 h-14 rounded-full flex justify-center items-center"
                >
                  <Piggybank />
                </div>
                <p className="text-lg font-light">Saving for Rainy days</p>
              </div>
              <h1 className="mt-5 font-extrabold text-3xl">N400.00</h1>
              <div className="w-full bg-gray-200 h-1 mt-5">
                <div style={meter} className="h-1"></div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex space-x-8">
            <div
              style={{
                backgroundColor: '#E2698D',
              }}
              className="rounded-lg w-2/6 h-52 px-5 py-5 flex relative"
            >
              <div className="grow">
                <h1 className="text-white font-bold text-lg">
                  Create a savings plan
                </h1>
                <p className="text-white font-extralight text-sm mt-1">
                  Earn up to 12%
                </p>
              </div>
              <div className="absolute right-10 bottom-0">
                <SavingsVector />
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#265859',
              }}
              className="rounded-lg w-2/6 h-52 px-5 py-5 flex relative"
            >
              <div className="">
                <h1 className="text-white font-bold text-lg">
                  Invest in a Female Farmer
                </h1>
                <p className="text-white font-extralight text-sm mt-1">
                  Get up to 25% returns per annum
                </p>
              </div>
              <div className="absolute right-8 bottom-1">
                <FarmVector />
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#F2F1F3',
              }}
              className="rounded-lg w-2/6 h-52 px-5 py-5 grid grid-cols-2"
            >
              <div className="grid-cols-1">
                <h1 style={{ color: '#E2698D' }} className=" font-bold text-lg">
                  Invite your girls to HerVest
                </h1>
                <p className="font-extralight text-sm mt-1">
                  Share you girl code.
                </p>
                <div className="flex items-center space-x-4 mt-9">
                  <h1
                    style={{ backgroundColor: '#E2698D' }}
                    className="text-white text-xl rounded-2xl px-5 font-extrabold py-2"
                  >
                    HG7FIB
                  </h1>

                  <p style={{ color: '#265859' }} className="">
                    Share
                  </p>
                </div>
              </div>
              <div className="grid-cols-1">
                <InviteVector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
