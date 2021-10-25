// https://www.redditstatic.com/desktop2x/PostFlowUpsellModal.1d348c0a9345545fb05b.js
// Retrieved at 10/25/2021, 10:50:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostFlowUpsellModal"], {
		"./src/reddit/components/PostFlowUpsellModal/index.m.less": function(e, t, o) {
			e.exports = {
				main: "_1zJ8Jro3TV9gXP9QMS3UJd",
				modalBody: "_2nglLLXTxb_aPBhE5NZMxR",
				modalSubmitButton: "_1ZO8PJTFXAIA7v0OrUU9Of",
				modalTitle: "_3BpSc3XnrqmtIW1BywfOjy"
			}
		},
		"./src/reddit/components/PostFlowUpsellModal/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				a = o.n(s),
				d = o("./node_modules/react-redux/es/index.js"),
				n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/higherOrderComponents/asModal/index.tsx"),
				l = o("./src/reddit/actions/modal.ts"),
				c = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = o("./src/reddit/constants/modals.ts"),
				m = o("./src/reddit/controls/Button/index.tsx"),
				u = o("./src/reddit/controls/TextButton/index.tsx"),
				_ = o("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = o("./src/reddit/hooks/useTracking.ts"),
				x = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = o("./src/reddit/components/PostFlowUpsellModal/index.m.less"),
				O = o.n(p);
			const {
				fbt: E
			} = o("./node_modules/fbt/lib/FbtPublic.js"), C = Object(n.c)({
				currentSubredditName: e => e.subreddits.api.create.lastCreatedSubredditId
			}), S = Object(d.b)(C, e => ({
				closeModal: () => e(Object(l.i)(i.a.POST_FLOW_UPSELL_MODAL_ID))
			}));
			t.default = Object(r.a)(S(e => {
				const t = Object(b.a)(),
					o = () => {
						e.closeModal(), t(Object(_.f)())
					};
				return a.a.createElement(c.e, {
					className: O.a.modalBody
				}, a.a.createElement(c.i, null, a.a.createElement(x.a, {
					className: O.a.modalTitle
				}, E._("Create your first post", null, {
					hk: "2N9d8K"
				}), a.a.createElement(u.a, {
					className: O.a.icon,
					onClick: o
				}, a.a.createElement(c.b, null)))), a.a.createElement(c.l, {
					className: O.a.main
				}, E._("Welcome to your new community, r/{subreddit name}! Set the tone for your community and welcome new members with a post.", [E._param("subreddit name", e.currentSubredditName)], {
					hk: "3C3CAV"
				})), a.a.createElement(c.g, {
					className: O.a.modalFooter
				}, a.a.createElement(m.s, {
					onClick: o,
					priority: m.b.Secondary
				}, E._("Continue", null, {
					hk: "3Huqfz"
				})), a.a.createElement(m.s, {
					className: O.a.modalSubmitButton,
					onClick: () => {
						e.closeModal(), t(Object(_.e)())
					},
					to: `/r/${e.currentSubredditName}/submit`,
					kind: m.a.InternalLink
				}, E._("Create A Post", null, {
					hk: "YXi2q"
				}))))
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostFlowUpsellModal.1d348c0a9345545fb05b.js.map