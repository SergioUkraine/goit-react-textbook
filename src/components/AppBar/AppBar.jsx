import React from 'react';
import { Wrapper, Section, Title } from './AppBar.styled';
import StatusFilter from 'components/StatusFilter';
import TaskCounter from 'components/TaskCounter';
function AppBar() {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
}

export default AppBar;
