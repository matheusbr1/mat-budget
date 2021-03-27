import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  .tooltip-content {
    position: relative;

    svg {
      margin: 0;
    }

    span {
      width: 160px;

      background: var(--light-purple);
      color: var(--white);
      padding: 8px;
      border-radius: 10px;
      font-size: 1.2rem;
      font-weight: 500;
      
      text-align: center;

      visibility: hidden;

      opacity: 0;
      transition: opacity 0.2s;

      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);

      position: absolute;

      &::before {
        content: '';
        position: absolute;
        border-style: solid;
        border-color: var(--light-purple) transparent;
        border-width: 6px 6px 0 6px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%)
      }
    }

    &:hover {
      span {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`