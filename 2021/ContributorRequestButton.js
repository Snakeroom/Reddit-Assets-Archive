// https://www.redditstatic.com/desktop2x/ContributorRequestButton.43a64f5ff5a9e50cd554.js
// Retrieved at 9/15/2021, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestButton"], {
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(t, e, s) {
			t.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				u = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/privateCommunity.ts"),
				_ = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				m = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				R = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				p = s.n(R);
			const q = () => ({
				[m.b.Comment]: r.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[m.b.IdCard]: r.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[m.b.PostSubmission]: r.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[m.b.ContentGate]: r.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: t,
							eventSource: e,
							openRequestToJoinSubredditModal: s,
							openContributorRequestModal: r
						} = this.props;
						e === m.b.ContentGate ? (t(Object(b.a)(e)), s()) : (t(Object(_.a)(e)), r())
					}
				}
				render() {
					const {
						eventSource: t,
						smallButton: e,
						className: s,
						isContributorRequestPending: n
					} = this.props;
					return o.a.createElement(a.s, {
						priority: t === m.b.ContentGate ? a.b.Secondary : a.b.Primary,
						className: Object(i.a)(e ? null : p.a.RequestButton, s),
						onClick: this.onRequest,
						size: e ? a.c.S : a.c.M,
						disabled: n
					}, n ? r.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : q()[t])
				}
			}
			e.default = Object(u.b)(null, t => ({
				openContributorRequestModal: () => t(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => t(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(C))
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const n = t => e => ({
					...r.defaults(e),
					source: t,
					action: "click",
					noun: "request_to_join_button",
					subreddit: r.subreddit(e)
				}),
				o = t => e => ({
					...r.defaults(e),
					source: t,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: r.subreddit(e)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const n = t => e => ({
					...r.defaults(e),
					source: t,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: r.subreddit(e)
				}),
				o = t => e => ({
					...r.defaults(e),
					source: "request_restricted_approval_form",
					action: "click",
					noun: t,
					subreddit: r.subreddit(e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestButton.43a64f5ff5a9e50cd554.js.map