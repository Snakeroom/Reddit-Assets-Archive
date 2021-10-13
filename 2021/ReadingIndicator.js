// https://www.redditstatic.com/desktop2x/ReadingIndicator.c7c16ee24487123aa225.js
// Retrieved at 10/13/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReadingIndicator"], {
		"./src/reddit/components/ReadingIndicator/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/lodash/noop.js"),
				s = t.n(n),
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				i = t("./src/realtime/GQLSubscription/async.tsx");
			a.default = ({
				isReadLoadTest: e,
				isWriteLoadTest: a,
				postId: t
			}) => {
				const n = Object(o.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: t
					}), [t]),
					d = Object(o.useMemo)(() => ({
						input: {
							channel: {
								...n,
								category: "USER_IS_READING_POST"
							}
						}
					}), [t]),
					c = Object(o.useMemo)(() => ({
						input: {
							channel: {
								...n,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [t]);
				return r.a.createElement(r.a.Fragment, null, a && r.a.createElement(i.a, {
					variables: d,
					onData: s.a,
					queryKey: "userIsReadingPost"
				}), e && r.a.createElement(i.a, {
					variables: c,
					onData: s.a,
					queryKey: "usersReadingIndicator"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReadingIndicator.c7c16ee24487123aa225.js.map