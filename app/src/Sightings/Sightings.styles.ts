import styled from 'styled-components';

export const SightingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeaderSection = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  position: relative;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
    pointer-events: none;
  }
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? '#6c5ce7' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#6c5ce7' : '#f0f0f0'};
  }
`;

export const SearchAndAddSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  width: 300px;

  input {
    border: none;
    background: transparent;
    width: 100%;
    padding: 0.3rem;
    font-size: 0.9rem;
    outline: none;
    color: #333;

    &::placeholder {
      color: #aaa;
    }
  }

  .search-icon {
    color: #aaa;
    margin-right: 0.5rem;
  }
`;

export const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const SightingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const SightingCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const SightingCardHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .tag {
    display: inline-block;
    background-color: #e9ecef;
    color: #666;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  .rare-tag {
    background-color: #ffecb5;
    color: #b7791f;
  }

  .common-tag {
    background-color: #c6f6d5;
    color: #38a169;
  }

  .endangered-tag {
    background-color: #fed7d7;
    color: #e53e3e;
  }

  .time-indicator {
    color: #888;
    font-size: 0.8rem;
    margin-left: auto;
  }
`;

export const SightingCardBody = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.4;
    font-size: 0.9rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem 1rem 1rem;
`;

export const SightingButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5649c0;
  }
`;

export const VerifyButton = styled(SightingButton)`
  background-color: transparent;
  color: #6c5ce7;
  border: 1px solid #6c5ce7;

  &:hover {
    background-color: #f0f0f7;
  }
`;

export const CommunityReportsSection = styled.div`
  margin-bottom: 3rem;
`;

export const ReportsTable = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
`;

export const ReportRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr auto auto;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .icon-button {
    background: none;
    border: none;
    color: #aaa;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }
`;

export const ConservationSection = styled.div`
  margin-bottom: 3rem;
`;

export const ConservationAlertsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AlertItem = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  gap: 1rem;

  .alert-icon {
    font-size: 1.5rem;
    color: #6c5ce7;
    background-color: #eeedf5;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .alert-content {
    flex: 1;
  }

  h3 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0;
    line-height: 1.4;
  }

  .arrow-icon {
    color: #aaa;
    font-size: 1.2rem;
    align-self: center;
  }
`;

export const SpeciesOfMonthSection = styled.div`
  margin-bottom: 3rem;
`;

export const SpeciesCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  .spotlight-tag {
    background-color: #e9ecef;
    color: #666;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .species-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #6c5ce7;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }

  .buttons-container {
    display: flex;
    gap: 1rem;
  }
`; 