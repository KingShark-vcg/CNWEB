import React from "react";
import DuplicatedSVGs from "./Dupli";
import Counter from "./counter";

const Body_Product = () => {
  return (
    // mr-10 ml-10 mt-10
    <div className="w-10/12 max-w-fit mx-auto mt-10 mb-10 z-0">
      <div className="flex gap-9 2xl:relative max-sm:block max-sm:space-y-4">
        <div className="bg-white p-6 max-w-2xl h-max overflow-hidden rounded-2xl 2xl:sticky z-10 top-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/a127/dffe/91a6adabc0fc2405b5fc5b2387728fbd?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T24t2QCWSHyGkrdtL~zDRff~bThvrAlB6zzZoL2WIC0du3wAX4R6khAxn5bYJB0Q1-MuLOSjQe5uzTx2GsXqZRzmRM1YRj3Jhah9R2DSMhR5m~zQ6G3M4cjGkVuTtnZj-yL5PNiUUUo39RWr1NUsW5e1SJy4SKYk-uYWdOXdGlQyyAIk2gb5VVeDdCzCk7Q5m7fxR1R6D~MGRPGVuuXcsUxeWqUaaXfflZ73-CDE2E9ijm3gLTAVuvX4nU-PzWXK57jbdLrbt4kgEaN2nuMt-kPBUIqf~CSw64kwMAxvbhCdrf-99hngpXW~Y-w6NSyLY8EQ2fhrwvq0j6Peo1nVPw__"
            alt=""
            className="size-fit"
          />
          <ul className="flex gap-4 pt-7 w-96">
            <img
              src="https://s3-alpha-sig.figma.com/img/35f9/9df6/5083919b768cb14632e114eb87e15588?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oLAmCzNiDIZTE4eH9cNcrLNQGlDATu6t5kZog8cTEJMYISKUhkbCFZs0WamrSwEmqgZkY1hOZ4wIzafiSpMCc8khG0QLb1TWN-FBd5F0zfojJ~bMeX7Cr3ZtrM025ZSOA2MELvgr0toMBnYgDfSCD6R~zbSEs3bgLjMjHDj9S9f8QQzoV1k-GXHd6JKLizaJ62REgf4UvjgEsh~M2IRq7gpRrlTQgkvhWEaOinfH0C~P~bcIWNBx-92eCSz-Xp3i1mAKChdRApTzn5YPgcR-OQ-zcl5a0mFGr0uRxzdQE4GNlNXr2WkAoiZulURCvdv-7hSAYi2dT84toIH4y4uM7Q__"
              alt=""
              className="size-fit"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/9bf7/a95a/7a259f4eecdb5a55b8e184e5efc4d9c0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FJL4e6bX-rYi4c0azM7CRwHBw6fZYmfmgF9HqZyOkkHnwiKBvk8JqzKQuTQXOyGfgX-vL-z7LNWUShbbLs5DNIR717vNYxjYAq6jb7GO6BHCivKfgdyWk-uBV3aVR6hVChjUDpGWKU3fxggJEZDXl6MZsWlq146ZmGq6CYl63ZmVS~E54StnIVzQpHNVZ8VK65xIh3SOrESW54RI2JYwXlVwFTvcivDPV7rAP41KFKaOaIOU4ag5T1zc1EOQSVnLFw7hBgyWLNaz6xTDqZOiQTQWW4c119sIgaPosohGbHnpciCT242aECmeJ-DyUoiBKymTdCahxUgvksAuuO~0JA__"
              alt=""
              className="size-fit"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/cb99/0150/90a83e97ff6294bcb6ea4cf47588f56a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AacaFtRBLuumfNP4-n531MANmGSMRpmF4PeGIOjEnGccruguORunZi1Z8mVa~GWWj9vXehFYIKGh63ZLCuGlZQEG0eysnQC01nYXqBZx8ypDh-voOUdkIhB6t0HvaRJTbcLSXPgPJGgq2AKefxuAZSj~F9Z~BenkOeebEXAKOLt06JMSZy80woFAP9sNPwmbf8Pa7xM3ru8ympwkPvIBxU7hhFhgTngLeaaM7Q-0W8iBmrST116ioB5BuNiZjTKNF98e3EqaphoGSOFDVDnup~vxoN0IdDXycHKuj~FCZU5E~IirnUsjdMgFLJKPdVDunVgKOFjCdD9rUYqeLItiXw__"
              alt=""
              className="size-fit"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/b4cb/a671/8087591271d94f06a57a88c652abbcb1?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG8v4hpxVSHa5UoMOVzmaPRVo5BG7ReAMSRA7rQnZKzY7B9hFCoq7loIDM4-CMh4T9H4S6frGfAUk-IyxiMr1uvfy0m~RH5fwMlWR4akGuF5ES9-mCZzY5kjtE9Np1K2bWAdxWa2CJoKySP2w2vmNXYniozXI0xvdBxewDGMljagZakOJJG4qD4dWTzNtNX7gchcl1lzx~gUeVDhvyVLp5yms8E~84nvFG~wI~DV-rx74wTS0IU76tUhwvWfdYYOehLLDd8645vOaXnn4xpkBfcZ4mQ6vN6ChStE2seKTfwguLR3LZjrkX-ySnIIGii8coI3lzYkpzhuVsan-WS-OQ__"
              alt=""
              className="size-fit"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/40e2/9626/46b53b876fefbe28b68e01f765d674ce?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZ3QdhcQiN~R9iqiU9iuv-NruJgjkDcDUUtoC08014IK1v7e1Shg0U9ccf-Yf5DZTYc~Rl-Qi~CORipXhl4PQoLF3deaxUbx1S4i~INBZgYik0FPSMe9oBUv9ojntSW-H~uaVe5~e04t3vhfFTG8wAg840ANq76jMlB171X5DmAXX6bQ3fZeTbF9H-Td1gj0LeB4zqxTRPJDqQETgJV3WUKN4EO6xRvxmu3xX2bOKJZr5ATOFzn8k~D4UKDV4lFCrCPe2e9kmQUDoLjYevi1ydAAfB2IOW4X0y~mUHuKQ5hq4kj57ulLh8wUEG~4ijdOMZ1ooLgWYj6ESF9CV3UMrA__"
              alt=""
              className="size-fit"
            />
          </ul>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold pb-4">Đặc điểm nổi bật</h2>
            <ul className="text-xl">
              <li className="flex gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d1rfcJKt2hpKYzt5BJPoJFuo~IVFylq5v-X9wruqmiYQazWjQ4ehDVrDoIADQXQK~NAIdwH~rK8ewzYK69L-NEAasY31ht~wWkjAtozxcxmtdEz3IwLA9R0-g8Vs~HuBMoE4StzdcwD6V-kSh5LHOh5NtwcVS3f94UaCp7R01mw8w~llWWsYtBSAvqKqeEjiqOGiexml0dFVG7vyoy~di-OaeROpfqDskiIDjqiCjNbDzVNXCyLhyiUvwqvL9F1RPIbFV4TfWW1-nOlRrxNtAsk6b5yGy8SXmPmBVhnNCK68-O4ij4Q4-Jh7IJ38Mvt6i18eEBbwQK~9y6zYf8KGzQ__"
                  alt=""
                  className="size-7"
                />
                <span>
                  Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.
                </span>
              </li>
              <li className="flex gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d1rfcJKt2hpKYzt5BJPoJFuo~IVFylq5v-X9wruqmiYQazWjQ4ehDVrDoIADQXQK~NAIdwH~rK8ewzYK69L-NEAasY31ht~wWkjAtozxcxmtdEz3IwLA9R0-g8Vs~HuBMoE4StzdcwD6V-kSh5LHOh5NtwcVS3f94UaCp7R01mw8w~llWWsYtBSAvqKqeEjiqOGiexml0dFVG7vyoy~di-OaeROpfqDskiIDjqiCjNbDzVNXCyLhyiUvwqvL9F1RPIbFV4TfWW1-nOlRrxNtAsk6b5yGy8SXmPmBVhnNCK68-O4ij4Q4-Jh7IJ38Mvt6i18eEBbwQK~9y6zYf8KGzQ__"
                  alt=""
                  className="size-7"
                />
                <span>
                  Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của
                  trẻ em.
                </span>
              </li>
              <li className="flex gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d1rfcJKt2hpKYzt5BJPoJFuo~IVFylq5v-X9wruqmiYQazWjQ4ehDVrDoIADQXQK~NAIdwH~rK8ewzYK69L-NEAasY31ht~wWkjAtozxcxmtdEz3IwLA9R0-g8Vs~HuBMoE4StzdcwD6V-kSh5LHOh5NtwcVS3f94UaCp7R01mw8w~llWWsYtBSAvqKqeEjiqOGiexml0dFVG7vyoy~di-OaeROpfqDskiIDjqiCjNbDzVNXCyLhyiUvwqvL9F1RPIbFV4TfWW1-nOlRrxNtAsk6b5yGy8SXmPmBVhnNCK68-O4ij4Q4-Jh7IJ38Mvt6i18eEBbwQK~9y6zYf8KGzQ__"
                  alt=""
                  className="size-7"
                />
                <span>
                  Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ
                  của các quốc gia.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-9 border-t-slate-300 border-t-2 border-solid h-10 max-sm:hidden">
            <div className="flex gap-2 text-xl items-center pt-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/9c38/d62c/74de8a849faa243a350a9eff83ad1ef6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SASBrys07qXb-GIsiDWXGd3UhTeJWCqcROYSiLeGVuHXzR2wvFkKc3ccg871cD0WE6PWDaGBG3nB1IMgoh32TaSAaiLMSVwA6PHNGZu3X83qyTS-q5u9TLyt7b6FsH2Njbi1xr6RLIfQcK0QK3EsTqJp1gF--V4RNiXv47jRyQjGGwO3CGLbIY1a3mKNs8koq-9olO16Bwg9o3Zz-AgW2WBRIxSfvzwWcyI0smoJrHVxFhMM0XaTaSnBMVXTaj7rXGbLyJBJe6rTbnBBI0eoGZN9N3mtCyFZ4uJ2jmU4xuNBKgMT~U7GwPCy371fkFVohH9IKgVNFTBB8Y5a6eZF4A__"
                alt=""
                className="size-10"
              />
              <p className="">
                <span className="text-slate-400">Xem thêm</span> Tóm tắt nội
                dung sách
              </p>
              <div className="pl-56">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b105/72b4/2a2e3f80b524d365000d30c717ec9e9b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMLPkVcDULkg4Dx4QdCGktNcy6I~~HJ2IeXd~qNHm8ZBSHuY0hhOvAZTtKKb0lMAu~fXTaGB68ETY7Ek2d6F2nMrsbWjzXt5NglbBJufxGOoHIcEdtsq7pm9Dn4Blox0S0-foffrUGl8aM70K9Z0ukUxgVh65294h4~U0j-VNcHO66Uh9hQyoz~-iqRL3EW4fO-4QgOon2T1mS46nzhJJWODXwZekVOB3XY0vUtEzYI-xxgRM~sMDDJNKcKsjhDtRRiLh4duHzAOWGWgh5DwBR7GOoY-HCv6xjCIyfGeYUgo6V8cJzh6jIQ6VHWOtTe2FI5J-fussYDb1Gb9fcaUZQ__"
                  alt=""
                  className="size-10 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="bg-white max-w-3xl p-6 rounded-2xl">
            <div className="mb-11">
              <div className="flex items-center gap-2 text-xl">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3787/ee15/f5fc9524f060e2540605302d3aa5a90f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URDQm5Kt-GUwb8XLLkj8m9YsReYxF83wa5rpdkYYf0fxGkkLl8YSAe5jGcorlBUG8xopZby-KrDpyEVoxt~QoKAHV0DhllRggSav0hXjIlO2vit--0gMd2WXMuRFNPCL8Sb7ZnMD4EXwLjiUmaxAKZgH3bn3sXlhkDyYRVAuIZht6HbfSCcpGRjr9gn1CP5NHriIRdW0uXRXCEHEaUioA2exX~j7H5jCrIovIsdZxf5rbWEScI5zDp6EN-JBQYBm3EPVMpiJaaHkjFKykLlymkd4kRKwptWqkMaSTg1BaBW66L17e9Q0rngWjNKKeC7aBhpZ8jFKkAnDsJXHrZdn3A__"
                  alt=""
                  className="w-24 h-6"
                />
                <p className="text-blue-600">
                  <span className="text-black">Tác giả:</span> Aleksandra
                  Mizielińska, Daniel Mizieliński
                </p>
              </div>
              <h1 className="text-3xl font-semibold py-4">Bản Đồ</h1>
              <div className="flex text-black gap-3 items-center">
                <span className="">4.8</span>
                <DuplicatedSVGs filled={5} count={5} />
                <span className="text-slate-400">(928)</span>
                <div></div>
                <span className="text-slate-400">Đã bán 5000+</span>
              </div>
              <div className="flex py-4 items-center gap-4">
                <div className="flex">
                  <h1 className="text-4xl text-black font-semibold">257.000</h1>
                  <span className="font-semibold">₫</span>
                </div>
                <span className="bg-slate-400 content-center rounded-3xl text-xl w-14 h-8">
                  -26%
                </span>
              </div>
              <div className="pt-8">
                <h2 className="text-black text-2xl font-semibold">
                  Thông tin chi tiết
                </h2>
                <table class="table-auto w-full text-xl text-slate-600 mt-6 space-y-4">
                  <tbody className="table-auto space-y-4">
                    <tr className="border-b-2 border-slate-300 mb-5">
                      <td>Phiên bản sách</td>
                      <td className="text-black">Phiên bản thường</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300">
                      <td>Công ty phát hành</td>
                      <td className="text-black">Nhã Nam</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300">
                      <td>Ngày xuất bản</td>
                      <td className="text-black">2020-03-02 00:00:00</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300">
                      <td>Kích thước</td>
                      <td className="text-black">27 x 37 cm</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300">
                      <td>Dịch Giả</td>
                      <td className="text-black">QuỳnhChi</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300">
                      <td>Loại bìa</td>
                      <td className="text-black">Bìa cứng</td>
                    </tr>
                    <tr className="border-b-2 border-slate-300">
                      <td>Số trang</td>
                      <td className="text-black">108</td>
                    </tr>
                    <tr>
                      <td>Nhà xuất bản</td>
                      <td className="text-black">Nhà Xuất Bản Lao Động</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-3xl p-6 mt-10 rounded-2xl">
            <h1 className="pb-4 text-xl font-semibold">Mô tả sản phẩm</h1>
            <img
              src="https://s3-alpha-sig.figma.com/img/2184/4909/62676b75d5ba44eb297a938074833093?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB3AQPFNEpSYsxjsr1E9k09UQ3HU4gmWpP3MZafwEGzHzo-yIW-Op1gdUISqUTidkCqLOaGHbDiaWb-yrZYlHYP2LEm5zU80bk07di0MNXaK03Cg5nlLu7gxqK3frWCjha0reOQiHEWsF-6y23u0fBhTydyM1jehSVKzBkECxf4TMhmpD4Jtnf1IYqft0gqyXFdt2gwoLEPOIImC8PuHsHh27CPUK9XMu9N-v-2V0ZuY7CuRHSSti89qitPvUWpC9UXMWbvppD-Hq9ZnIgBl6NfmANzCIR1ENJn6eqdjaS4jVvXdMk5aIjJeBvApSYX2B27jEohzNfaO~8zdatE27w__"
              alt=""
              className="size-full pb-5"
            />
            <div className="pt-5 space-y-4 text-xl text-justify">
              <p>
                Hãy khám phá thế giới cùng cuốn bản đồ khổng lồ đầu tiên ở Việt
                Nam! Sách gồm 52 tấm bản đồ minh họa sinh động các đặc điểm địa
                lý và biên giới chính trị, giới thiệu những địa điểm nổi tiếng,
                những nét đặc trưng, về động vật và thực vật bản địa, về con
                người địa phương, các sự kiện văn hóa cùng nhiều thông tin hấp
                dẫn khác.
              </p>
              <p>
                Đến với cuốn Bản đồ khổng lồ (27x37cm) gồm 52 tấm bản đồ đầy màu
                sắc sống động này, các bạn nhỏ sẽ được thỏa sức khám phá thế
                giới. Có tất cả 6 tấm bản đồ lục địa và 42 bản đồ quốc gia. Châu
                u có gì, châu Á nổi tiếng vì điều chi, khí hậu ở châu Phi như
                thế nào? Tất cả những chi tiết nổi bật của từng vùng miền, từng
                đất nước, như địa danh, trang phục, ẩm thực, lễ hội tập tục
                truyền thống, v…v… đều được liệt kê bằng những hình vẽ ngộ
                nghĩnh đáng yêu. Mỗi bản đồ có thống kê sơ bộ về diện tích, dân
                số, ngôn ngữ… để các bạn nhỏ nắm được thông tin tổng quát của
                từng đất nước, châu lục. Mỗi nước đều được phân chia thành các
                vùng địa lý cụ thể với tên vùng được viết mờ, các thành phố lớn
                trong từng nước được viết bằng màu đỏ nổi bật với chấm đỏ bên
                cạnh.
              </p>
              <p>
                Cuốn sách này hứa hẹn sẽ là tấm vé đưa độc giả nhỏ du lịch khắp
                mọi miền trên thế giới. Các bậc phụ huynh cũng có thể đồng hành
                cùng con em mình, cùng ngâm cứu từng chi tiết trên mỗi tấm bản
                đồ, tìm hiểu và bàn luận về các địa phương. Thông qua việc chỉ
                dẫn, diễn giải cho các con về những thông tin trên bản đồ, đây
                sẽ là cuốn sách tương tác tốt để bố mẹ kết nối và gần gũi với
                con mình hơn.
              </p>
              <h1>CUỐN SÁCH NÀY CÓ GÌ ĐẶC BIỆT?</h1>
              <p>
                Cuốn sách Bản đồ đã được xuất bản tại hơn 30 quốc gia, bán được
                hơn 3 triệu bản in, là một trong những cuốn bản đồ ăn khách nhất
                thế giới. Bản đồ của hai tác giả Aleksandra Mizielińska và
                Daniel Mizieliński đã giành được nhiều giải thưởng lớn, nổi bật
                nhất là giải Prix Sorcières của Pháp và giải Premio Andersen của
                Ý – hai giải thưởng danh giá cho dòng sách thiếu nhi.
              </p>
              <p>
                Các quốc gia đã xuất bản “Bản đồ”: Úc, Áo, Bỉ, Brazil, Canada,
                Chile, Trung Quốc, Croatia, Séc, Ecuador, Ai Cập, Fiji, Phần
                Land, Pháp, Đức, Ghana, Hy Lạp, Iceland, Ấn Độ, Ý, Nhật Bản,
                Jordan, Madagascar, Ma Rốc, Mexico, Mông Cổ, Namibia, Nepal, Hà
                Lan, New Zealand, Peru, Ba Lan, Nam Phi, Romania, Nga, Tây Ban
                Nha, Thụy Điển, Thụy Sĩ, Tanzania, Thái Lan, Anh, Mỹ.
              </p>
              <p>
                ĐẶC BIỆT: Phiên bản "Bản đồ" Việt Nam đặc biệt được tác giả vẽ
                riêng đất nước Việt Nam.
              </p>
              <p>
                Để thực hiện cuốn sách đồ sộ này, hai tác giả trẻ đã phải mất
                hơn 3 năm trời. Sau khi nghiên cứu và tìm hiểu kỹ lưỡng, họ lập
                một danh sách các thông tin hấp dẫn và thú vị với trẻ em, chọn
                lọc ra những chi tiết đặc sắc nhất của mỗi nước để vẽ vào bản
                đồ. Các tấm bản đồ đều được vẽ theo tỉ lệ chuẩn xác dựa trên các
                bản đồ địa lý đã được phát hành. Hai tác giả không chỉ vẽ tay
                tất cả các chi tiết hình ảnh mà còn dày công thiết kế tất cả các
                phông chữ được dùng trong sách.
              </p>
              <p>
                Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên
                cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng
                mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ
                phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ
                nước ngoài có giá trị trên 1 triệu đồng).....
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/3 p-6 h-max rounded-2xl max-sm:sticky z-10 top-10 max-sm:w-fit">
          <h1 className="text-xl font-semibold">Số Lượng</h1>
          <Counter />
          <h1 className="text-xl font-semibold">Tạm tính</h1>
          <div className="flex mt-6">
            <h1 className="text-4xl text-black font-semibold">257.000</h1>
            <span className="text-xl text-black font-semibold">₫</span>
          </div>
          <div className="w-full space-y-5 mt-5">
            <div className="bg-red-600 text-4xl text-white h-12 text-center hover:bg-red-500 hover:font-semibold cursor-pointer">
              Mua ngay
            </div>
            <div className="border-2 border-sky-600 text-blue-600 text-4xl h-12 text-center hover:bg-sky-500 hover:font-semibold cursor-pointer">
              Thêm vào giỏ
            </div>
            <div className="border-2 border-sky-600 text-blue-600 text-4xl h-12 text-center hover:bg-sky-500 hover:font-semibold cursor-pointer">
              Mua trước trả sau
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body_Product;
