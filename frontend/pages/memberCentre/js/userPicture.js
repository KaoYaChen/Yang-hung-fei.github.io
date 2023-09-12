document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const avatarImage = document.querySelector(".avatar-image img");
  let base64Data = null; // 初始化为 null

  // 当用户选择文件时触发事件
  fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // 使用FileReader读取文件并转换为Base64
      const reader = new FileReader();
      reader.onload = (e) => {
        base64Data = e.target.result; // 更新 base64Data 变量的值
        avatarImage.src = base64Data; // 将Base64数据设置为图像的源
      };
      reader.readAsDataURL(selectedFile);
    }
  });

  // 更换头像按钮点击事件
  const changeAvatarButton = document.getElementById("changeAvatarButton");
  changeAvatarButton.addEventListener("click", () => {
    fileInput.click(); // 模拟文件输入元素的点击事件
  });
});

export default base64Data; // 导出 base64Data 变量
