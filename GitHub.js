async function submitData() {
    const input = document.getElementById('main').value;
    
    // 替换以下3个值！
    const token = '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';      // 粘贴刚刚复制的Token
    const repoOwner = 'XiYinadi';  // 如你的账号是 abc，就填 abc
    const repoName = '-';        // 如仓库名是 my-form-data

    try {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: input,  // Issue标题
          body: input           // 用户输入的内容会显示在Issue正文
        })
      });
      if (response.ok) {
        console.log('提交成功!去GitHub仓库的Issues查看吧~');
    } else {
        console.log('提交失败，请检查控制台');
    }
}
    catch (error) {
      console.error('Error:', error);
    }
}
