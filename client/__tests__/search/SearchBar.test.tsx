import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "@/app/search/page";

async function renderComplexForm() {
  render(<Search />);
  const user = userEvent.setup();
  const input: () => HTMLInputElement = () => screen.getByRole("textbox");
  const textOnInput = () => input().value;

  return { user, input, textOnInput };
}

describe("검색창 테스트", () => {
  it("입력한 값이 보이는가", async () => {
    const { input, textOnInput, user } = await renderComplexForm();
    await user.type(input(), "버드");
    expect(textOnInput()).toBe("버드");
  });
});
