// https://www.redditstatic.com/desktop2x/ContributorRequestButton.e2cd43543c7809ff2361.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/privateCommunity.ts"),
				_ = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				m = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				R = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				p = s.n(R);
			const q = () => ({
				[m.b.Comment]: o.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[m.b.IdCard]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[m.b.PostSubmission]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[m.b.ContentGate]: o.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: t,
							eventSource: e,
							openRequestToJoinSubredditModal: s,
							openContributorRequestModal: o
						} = this.props;
						e === m.b.ContentGate ? (t(Object(b.a)(e)), s()) : (t(Object(_.a)(e)), o())
					}
				}
				render() {
					const {
						eventSource: t,
						smallButton: e,
						className: s,
						isContributorRequestPending: n
					} = this.props;
					return r.a.createElement(a.t, {
						priority: t === m.b.ContentGate ? a.c.Secondary : a.c.Primary,
						className: Object(u.a)(e ? null : p.a.RequestButton, s),
						onClick: this.onRequest,
						size: e ? a.d.S : a.d.M,
						disabled: n
					}, n ? o.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : q()[t])
				}
			}
			e.default = Object(i.b)(null, t => ({
				openContributorRequestModal: () => t(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => t(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(C))
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return r
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = t => e => ({
					...o.o(e),
					source: t,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.lb(e)
				}),
				r = t => e => ({
					...o.o(e),
					source: t,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.lb(e)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return r
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = t => e => ({
					...o.o(e),
					source: t,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.lb(e)
				}),
				r = t => e => ({
					...o.o(e),
					source: "request_restricted_approval_form",
					action: "click",
					noun: t,
					subreddit: o.lb(e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestButton.e2cd43543c7809ff2361.js.map