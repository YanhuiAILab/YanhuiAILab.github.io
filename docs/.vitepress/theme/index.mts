import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();
        
        // 评论组件 - https://giscus.app/
        giscusTalk({
            repo: 'YanhuiAILab/YanhuiAILab.github.io',
            repoId: 'R_kgDON6wOew',
            category: 'Announcements',
            categoryId: 'DIC_kwDON6wOe84CnC1B',
            mapping: 'pathname', 
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "1",
            inputPosition: 'top',
            lang: 'zh-CN',
            locales: {
                'zh-Hans': 'zh-CN',
                'en-US': 'en'
            },
            homePageShowComment: false,
            lightTheme: 'light',
            darkTheme: 'transparent_dark',
            loading: "lazy",
            // ...
        }, {
            frontmatter, route
        },
            true
        );
    }
};