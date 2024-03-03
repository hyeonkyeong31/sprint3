import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

export default function Home() {
    return (
        <>
            <Title size="large">테스트</Title>
            <Button size="large" scheme="primary">
                버튼테스트
            </Button>
            <InputText placeholder="여기에 입력하세요" />
            <div>Home body</div>
        </>
    );
}
