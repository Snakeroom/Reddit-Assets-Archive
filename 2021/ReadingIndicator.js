// https://www.redditstatic.com/desktop2x/ReadingIndicator.53cff6b55d4ca61403ec.js
// Retrieved at 10/7/2021, 11:00:10 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReadingIndicator"], {
		"./src/reddit/components/ReadingIndicator/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/lodash/noop.js"),
				s = t.n(n),
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				d = t("./src/realtime/GQLSubscription/async.tsx");
			a.default = ({
				isReadLoadTest: e,
				isWriteLoadTest: a,
				postId: t
			}) => {
				const n = Object(o.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								postID: t
							}
						}
					}), [t]),
					i = Object(o.useMemo)(() => ({
						...n,
						category: "USER_IS_TYPING_ON_POST"
					}), [t]),
					_ = Object(o.useMemo)(() => ({
						...n,
						category: "POST_TYPING_INDICATOR"
					}), [t]);
				return r.a.createElement(r.a.Fragment, null, a && r.a.createElement(d.a, {
					variables: i,
					onData: s.a,
					queryKey: "userIsReadingPost"
				}), e && r.a.createElement(d.a, {
					variables: _,
					onData: s.a,
					queryKey: "usersReadingIndicator"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReadingIndicator.53cff6b55d4ca61403ec.js.map