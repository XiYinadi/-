async function submitData() {
    const input = document.getElementById('main').value;

    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    // 替换以下3个值！
    const token = process.env.GITHUB_TOKEN;
    const repoOwner = process.env.REPO_OWNER;
    const repoName = process.env.REPO_NAME; // 如仓库名是 my-form-data

    try {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: input,  // Issue标题
          body: '时间:'+timestamp          // 用户输入的内容会显示在Issue正文
        })
      });
      if (response.ok) {
        console.log('提交成功!去GitHub仓库的Issues查看吧~');
        document.getElementById('main').value = '';
    } else {
        console.log('提交失败，请检查控制台');
    }
}
    catch (error) {
      console.error('Error:', error);
    }
}