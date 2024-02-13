import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

function BoardIdPage({ params }: BoardIdPageProps) {
  return <Canvas boardId={params.boardId} />;
}

export default BoardIdPage;
