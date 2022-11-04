import Image from 'next/image';
import { FC } from 'react';

const Header: FC = () => (
  <div className="root">
    <div className="content">
      <span>Zodify</span>
      <a
        className="github"
        href="https://github.com/eezing/zodify"
        target="_blank"
      >
        <Image
          src="/GitHub-Mark-Light-24px.png"
          alt="github"
          width={24}
          height={24}
        />
      </a>
    </div>
    <hr />
    <style jsx>{`
      .root {
        color: white;
        background-color: dark;
        font-size: 1.5rem;
        font-family: monospace;
      }
      .content {
        padding: 0.35rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .github {
        height: 24px;
        width: 24px;
      }
      hr {
        margin: 0 0 2px 0;
      }
    `}</style>
  </div>
);

export default Header;
