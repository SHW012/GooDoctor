import styled from "styled-components";

// 전체 레이아웃을 담당하는 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f7f9fc;
`;

// 상단의 탭 컨테이너
export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f5;
  border-bottom: 2px solid #dcdcdc;
`;

// 각 탭 스타일
export const TabButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#afc1e3" : "white")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  font-size: 20px;
  font-weight: bold;
  padding: 15px 30px; /* 버튼을 더 넓게 */
  border: 1px solid #afc1e3;
  border-radius: 8px;
  margin: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: #afc1e3;
    color: white;
  }
`;

// 메인 컨텐츠 영역
export const MainContent = styled.div`
  display: flex;
  flex: 2;
  padding: 15px; /* 전체 여백 넓힘 */
  justify-content: space-between;
`;

// 왼쪽 피드백 섹션 (학력 등)
export const FeedbackSection = styled.div`
  flex: 0.25; /* 좀 더 넓게 설정 */
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// 각 피드백 항목 (학력, 자격증 등)
export const FeedbackItem = styled.div`
  margin-bottom: 25px;
`;

export const FeedbackTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #2c6bcf;
  margin-bottom: 12px;
`;

export const FeedbackContent = styled.p`
  font-size: 16px;
  color: #555;
`;

// 우측 피드백 상세 섹션
export const FeedbackDetailSection = styled.div`
  flex: 0.6; /* 좀 더 넓게 설정 */
  padding: 100px; /* padding을 줄여서 내부 여백 설정 */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  /* 높이 조절 */
  height: auto; /* 필요에 따라 자동으로 늘어나게 */
  min-height: 500px; /* 최소 높이를 설정 */
  max-height: 600px; /* 최대 높이를 설정 */
  overflow-y: auto; /* 내용이 넘치면 스크롤 */
`;

export const FeedbackDetailTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2c6bcf;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

export const FeedbackDetailContent = styled.div`
  background-color: #edf2f7;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SpecSidebar = styled.div`
  flex: 0.2; /* 사이드바 넓이 조정 */
  padding: 20px;
  background-color: #f0f3f7;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#2c6bcf" : "#333")};
  &:hover {
    color: #2c6bcf;
  }
`;

export const BottomButton = styled.button`
  background-color: #2c6bcf;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  width: 100%;

  &:hover {
    background-color: #1e4a9a;
  }
`;
