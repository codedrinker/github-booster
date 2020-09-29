; (function () {
    let booster_domains = ["https://hub.fastgit.org/", "https://github.com.cnpmjs.org/"];
    let github_domain = "https://github.com/";
    if(window.location.href.indexOf(github_domain) == 0) {
        for (var i = 0; i < booster_domains.length; i++) {
            let booster_domain = booster_domains[i];
            let current_domanin = window.location.href;
            let switching_domain = current_domanin.replace(github_domain, booster_domain);
            let text = `<p class="mb-2 f5" >Mirror ${i+1}.</p>`;
            let input = 
                    `<div class="input-group">
                      <input type="text" class="form-control input-monospace input-sm bg-gray-light" data-autoselect="" value="${switching_domain}.git" aria-label="${switching_domain}.git" readonly="">
                      <div class="input-group-button">
                        <clipboard-copy value="${switching_domain}.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:1064563,&quot;originating_url&quot;:&quot;${switching_domain}&quot;,&quot;user_id&quot;:3821949}}" data-hydro-click-hmac="368b66ddf7a1db1063c429b6d3802bc22fc2b24af1c53a37119d982b99812400" tabindex="0" role="button">
                            <svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></clipboard-copy>
                      </div>
                    </div>`;
            let parent = $("tab-container .input-group").parent();
            parent.append(text);
            parent.append(input);
            let downloadBtn = `
            <li class="Box-row Box-row--hover-gray p-0">
              <a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:183041039,&quot;originating_url&quot;:&quot;https://github.com/codedrinker/community&quot;,&quot;user_id&quot;:3821949}}" data-hydro-click-hmac="a6dd3c914e6049c9156c9d39267e1179182d1a92b6fe4c7bc5c7afa6c882b231" data-ga-click="Repository, download zip, location:repo overview" data-open-app="link" href="${booster_domain}codedrinker/community/archive/master.zip">
                <svg class="octicon octicon-file-zip mr-3" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z"></path></svg>
                Mirror ${i+1} Download ZIP
              </a>
            </li>`
            $(".js-remove-unless-platform").parent().append(downloadBtn);
        }
        return;
    }
    setTimeout(resetOptions,1000);
    function resetOptions() {
        let parent = $(".https-clone-options").parent();
        $(".https-clone-options").remove();
        let options = `<div class="https-clone-options">
            <h4 class="mb-1">
                Clone with HTTPS
                <a class="muted-link" href="https://docs.github.com/cn/github/using-git/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                    <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path>
                    </svg>
                </a>
            </h4>
            <p class="mb-2 get-repo-decription-text">
                Use Git or checkout with SVN using the web URL.
            </p>
            <div class="input-group mb-2">
                <input type="text" class="form-control input-monospace input-sm" data-autoselect="" value="https://github.com.cnpmjs.org/redis/redis.git" readonly="">
                <div class="input-group-button">
                    <clipboard-copy value="https://github.com.cnpmjs.org/redis/redis.git" class="btn btn-sm" tabindex="0" role="button">
                        <svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>
                    </clipboard-copy>
                </div>
            </div>
        </div>`
        parent.append(options);
    }
})();