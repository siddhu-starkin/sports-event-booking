import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

export default function Rewards() {
  const [rewardPoints, setRewardPoints] = useState(0);

  // ⛳ Use localStorage or context in future
  const userName = 'vivek'; // Hardcoded for testing — match with booking name!

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const res = await api.get(`/rewards?userName=${userName}`);
        console.log('🎯 Reward response:', res.data);
        setRewardPoints(res.data.points || 0);
      } catch (err) {
        console.error('Error fetching reward points:', err);
      }
    };

    fetchRewards();
  }, [userName]);

  const prizes = [
    {
      id: 1,
      title: '🏷️ ₹200 Off Coupon',
      requiredPoints: 1000,
      description: 'Get ₹200 off on your next booking.',
    },
    {
      id: 2,
      title: '🎫 Free Slot Pass',
      requiredPoints: 1500,
      description: 'Book one slot for free, any time you want.',
    },
    {
      id: 3,
      title: '👕 Sports Merchandise Coupon',
      requiredPoints: 2000,
      description: 'Claim exclusive gear through our partners.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-green-200 to-lime-300 p-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8 underline underline-offset-4">
        🎉 My Rewards
      </h1>

      <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg text-gray-900 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Total Points: <span className="text-green-600">{rewardPoints}</span>
        </h2>
        <p className="mb-6 text-gray-700">
          You earn <strong>+10 points</strong> for every successful booking. Keep playing and unlocking awesome rewards!
        </p>

        <hr className="my-6" />

        <div className="space-y-6">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className={`p-4 rounded-lg border-2 ${
                rewardPoints >= prize.requiredPoints
                  ? 'border-green-500 bg-green-100'
                  : 'border-gray-300 bg-gray-100'
              }`}
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{prize.title}</h3>
              <p className="text-gray-700 mb-2">{prize.description}</p>
              <p className="font-medium">
                Required: <span className="text-green-600">{prize.requiredPoints} points</span>
              </p>
              <button
                disabled={rewardPoints < prize.requiredPoints}
                className={`mt-3 px-4 py-2 rounded-full font-bold transition ${
                  rewardPoints >= prize.requiredPoints
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-white cursor-not-allowed'
                }`}
              >
                {rewardPoints >= prize.requiredPoints ? 'Redeem Now' : 'Not Eligible'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
