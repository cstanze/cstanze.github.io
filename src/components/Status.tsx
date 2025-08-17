import { useStore } from '@nanostores/react';
import { statusItems } from '../stores/statusStore';
import type { ReactElement } from 'react';

export default function Status() {
  const $statusItems = useStore(statusItems);

  return (
    <div className="bottom-1 right-1 absolute flex flex-col">
      {Object.values($statusItems).length ? Object.values($statusItems).filter(x => x.ongoing).map((item, _idx, _arr): ReactElement => (
        <span id="taskStatus" className="text-sm text-gray-400">
          {item.message}
        </span>
      )) : null}
    </div>
  );
}
