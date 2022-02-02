// https://www.redditstatic.com/desktop2x/ContributorRequestButton.ce3d77180125510ea453.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/privateCommunity.ts"),
				m = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				_ = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				R = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				p = s.n(R);
			const q = () => ({
				[_.b.Comment]: n.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[_.b.IdCard]: n.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[_.b.PostSubmission]: n.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[_.b.ContentGate]: n.fbt._("Request to Join", null, {
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
							openContributorRequestModal: n
						} = this.props;
						e === _.b.ContentGate ? (t(Object(b.a)(e)), s()) : (t(Object(m.a)(e)), n())
					}
				}
				render() {
					const {
						eventSource: t,
						smallButton: e,
						className: s,
						isContributorRequestPending: r
					} = this.props;
					return o.a.createElement(a.t, {
						priority: t === _.b.ContentGate ? a.c.Secondary : a.c.Primary,
						className: Object(u.a)(e ? null : p.a.RequestButton, s),
						onClick: this.onRequest,
						size: e ? a.d.S : a.d.M,
						disabled: r
					}, r ? n.fbt._("Request Pending", null, {
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
				return r
			})), s.d(e, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = t => e => ({
					...n.m(e),
					source: t,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.gb(e)
				}),
				o = t => e => ({
					...n.m(e),
					source: t,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.gb(e)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			})), s.d(e, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = t => e => ({
					...n.m(e),
					source: t,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: n.gb(e)
				}),
				o = t => e => ({
					...n.m(e),
					source: "request_restricted_approval_form",
					action: "click",
					noun: t,
					subreddit: n.gb(e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestButton.ce3d77180125510ea453.js.map