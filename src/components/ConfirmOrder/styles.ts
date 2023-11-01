import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;

  button {
    background: ${({ theme }) => theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    transition: background 0.3s;

    &:hover {
      background: #aa2424;
    }
  }
`
