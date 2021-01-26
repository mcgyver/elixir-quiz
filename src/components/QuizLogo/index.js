import styled from 'styled-components';

import React from 'react';

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="208.664" height="78.221" viewBox="0 0 208.664 78.221">
      <g id="Group_1" data-name="Group 1" transform="translate(-179 -495)">
        <text id="Elixir" transform="translate(179 549)" fill="#a5e02e" fontSize="60" fontFamily="PTSans-Caption, PT Sans Caption"><tspan x="0" y="0">Elixir</tspan></text>
        <text id="Quiz" transform="matrix(0.94, -0.342, 0.342, 0.94, 300.269, 562.885)" fill="#f62671" fontSize="40" fontFamily="PTSans-CaptionBold, PT Sans Caption" fontWeight="700"><tspan x="0" y="0">Quiz</tspan></text>
      </g>
    </svg>
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
