import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const email = localStorage.getItem("pendingEmail");
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });
      navigate("/set-password");
    } catch (error) {
      alert("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-8">
          <div className="mx-auto bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Verify OTP</h2>
          <p className="text-gray-500 mt-2">Check your email for the verification code</p>
          <p className="text-sm text-gray-500 mt-1">Sent to {email}</p>
        </div>
        
        <div className="space-y-5">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
              6-digit Verification Code
            </label>
            <input
              id="otp"
              type="text"
              placeholder="123456"
              maxLength={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-center text-xl tracking-widest"
              value={otp}
              onChange={(e) => {
                // Allow only numbers
                const value = e.target.value.replace(/\D/g, '');
                setOtp(value);
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
            />
          </div>
          
          <button
            onClick={handleVerify}
            disabled={isLoading}
            className={`w-full py-3.5 px-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center
              ${isLoading 
                ? 'bg-green-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg'}
            `}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </>
            ) : (
              'Verify Code'
            )}
          </button>
          
          <div className="text-center pt-2">
            <button 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              onClick={() => {
                // Resend OTP logic would go here
                alert("Resending OTP...");
              }}
            >
              Didn't receive code? Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;