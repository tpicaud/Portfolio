import { info } from "@data";
import { useState } from "react";

export default function WalletPopover() {

  const [isCopied, setIsCopied] = useState(false);
  const copyIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg>;
  const copiedIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>

  function handleCopy() {
    console.log('copied');
    navigator.clipboard.writeText(info.ethereum.address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className=" dark:bg-dark dark:text-gray shadow-xl flex flex-col items-start border border-zinc-300 dark:border-zinc-700 rounded-xl gap-4 p-4">
        <div>
          <p className=' dark:text-gray text-[12px] mb-1'>Ethereum address</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-sm w-6 h-6 p-2 bg-[#8699fc] bg-opacity-40">
              <img src="/assets/logo/eth-logo.png" alt="ethereum" className="h-auto max-w-[12px]" />
            </div>
            <p className='text-base font-bold main-heading'>{info.ethereum.ens}</p>
            <div className="flex items-center justify-center">
              
              {isCopied ? (
                <div className="flex items-center justify-center">
                  <span className="text-xs absolute -translate-y-4 text-green-500">Copied!</span>
                  <div className="rounded-md p-1 text-green-500 bg-opacity-40">{copiedIcon}</div>
                </div>
                )
                 : (
                  <button onClick={handleCopy}>
                    <div className="rounded-md p-1 bg-gray-200 hover:bg-slate-400 hover:bg-opacity-50">{copyIcon}</div>
                  </button>
                 )}
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-xl p-3 qrcode-container">
          <img src="/assets/images/qrcode.png" alt="qrcode" />
        </div>
    </div>
  );
}
