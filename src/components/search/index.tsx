import React, { useCallback, useEffect, useState } from 'react';

import * as Styled from './styles';

type Props = {
  onButtonClick: (title: string) => void;
  titleFromUrl: string;
};

const Search = ({ onButtonClick, titleFromUrl }: Props) => {
  const [searchingTitle, setSearchingTitle] = useState('');

  useEffect(() => {
    setSearchingTitle(titleFromUrl);
  }, [titleFromUrl]);

  const handleTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setSearchingTitle(value);
    },
    [setSearchingTitle]
  );

  const handleButtonClick = useCallback(() => {
    onButtonClick(searchingTitle);
  }, [searchingTitle, onButtonClick]);

  return (
    <Styled.Wrapper>
      <Styled.Input value={searchingTitle} onChange={handleTitleChange} />
      <Styled.Button
        disabled={searchingTitle.length === 0}
        onClick={handleButtonClick}
        type="button"
      >
        search
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Search;
