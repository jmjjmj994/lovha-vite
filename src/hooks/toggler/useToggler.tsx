import { useState } from 'react';

function useToggler(): [true | false, () => void] {
  const [active, setActive] = useState<boolean>(false);

  function handleToggler() {
    setActive((prev) => !prev);
  }

  return [active, handleToggler];
}

export default useToggler;
