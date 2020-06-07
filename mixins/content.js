import * as ROUTES from '~/constants/routes'

export const ContentMixin = {
    async asyncData ({ $content, route }) {
        let routeName
        if (route.name === ROUTES.INDEX_ROUTE) {
            routeName = `${route.name}`
        } else {
            routeName = `${route.name}${route.path}`
        }
        const content = await $content(routeName).fetch()
        return { content }
    }
}
