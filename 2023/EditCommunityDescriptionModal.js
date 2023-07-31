// https://www.redditstatic.com/desktop2x/EditCommunityDescriptionModal.ebc4d86463a6e5dd220b.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EditCommunityDescriptionModal"], {
		"./src/lib/hooks/useMutation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/hooks/useGqlContext.ts");

			function r(e) {
				const t = Object(o.a)(),
					[s, r] = Object(n.useState)(!1),
					[a, c] = Object(n.useState)(!1),
					[i, d] = Object(n.useState)(null),
					[u, l] = Object(n.useState)(null);
				return [Object(n.useCallback)(async s => {
					let n, o;
					r(!0), c(!0);
					try {
						if ((o = (n = await e(t(), s)).body).error) throw new Error(o.error.message);
						l(o.data)
					} catch (i) {
						d(i)
					} finally {
						r(!1)
					}
				}, [t, e]), {
					data: u,
					error: i,
					pending: s,
					called: a
				}]
			}
		},
		"./src/reddit/components/EditCommunityDescriptionModal/index.m.less": function(e, t, s) {
			e.exports = {
				ModalBody: "bHp9U-xwuQZkN1op0j8n7",
				modalBody: "bHp9U-xwuQZkN1op0j8n7",
				ModalHeader: "_2des4jxpfPE8KjwgIGeCBP",
				modalHeader: "_2des4jxpfPE8KjwgIGeCBP",
				ExpandLeft: "_1DO2ForFEirTeJ5ya4TJ3f",
				expandLeft: "_1DO2ForFEirTeJ5ya4TJ3f",
				CloseButton: "_2F2CKs4LbJVFJkq8ynMyf5",
				closeButton: "_2F2CKs4LbJVFJkq8ynMyf5",
				ModalMain: "OlEsHrs8C58L7B4w6TSQB",
				modalMain: "OlEsHrs8C58L7B4w6TSQB",
				TextArea: "_1i-_RjNgkWz5t9q_pzT7aq",
				textArea: "_1i-_RjNgkWz5t9q_pzT7aq",
				TextAreaLabel: "_1au4PaC2Z7rVmYkaGV7tOP",
				textAreaLabel: "_1au4PaC2Z7rVmYkaGV7tOP",
				ModalFooter: "_9nH2iJNMEL2BwF235M8Q9",
				modalFooter: "_9nH2iJNMEL2BwF235M8Q9",
				SaveButton: "_1cTbZ-X_H321wG2mSECP2L",
				saveButton: "_1cTbZ-X_H321wG2mSECP2L"
			}
		},
		"./src/reddit/components/EditCommunityDescriptionModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/hooks/useMutation.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/subreddit/questions.ts"),
				l = s("./src/reddit/actions/subredditSettings.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				y = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				j = s("./src/reddit/hooks/useTracking.ts"),
				f = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				O = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/components/EditCommunityDescriptionModal/index.m.less"),
				x = s.n(g);
			t.default = Object(c.a)(() => {
				const e = Object(a.e)(C.c),
					t = Object(a.e)(t => e && Object(O.c)(t)[e]),
					[s, c] = Object(o.useState)(""),
					g = Object(a.d)(),
					M = Object(j.a)(),
					[E] = Object(i.a)(_.a);
				if (!e || !t) return null;
				const k = () => g(Object(d.i)(p.a.EDIT_DESCRIPTION_MODAL));
				return r.a.createElement(m.e, {
					className: x.a.ModalBody
				}, r.a.createElement(m.i, {
					className: x.a.ModalHeader
				}, r.a.createElement(f.a, {
					className: x.a.ExpandLeft
				}, r.a.createElement(m.q, null, n.fbt._("Write a description", null, {
					hk: "1aXT9M"
				})), r.a.createElement(b.t, {
					className: x.a.CloseButton,
					onClick: k,
					priority: b.c.Plain
				}, r.a.createElement(m.b, null)))), r.a.createElement(m.l, {
					className: x.a.ModalMain
				}, r.a.createElement(m.t, {
					className: x.a.TextArea,
					onChange: e => c(e.currentTarget.value),
					placeholder: n.fbt._("Tell people what your community is about...", null, {
						hk: "17XTOW"
					}),
					value: s
				}), r.a.createElement("label", {
					className: x.a.TextAreaLabel
				}, n.fbt._("description", null, {
					hk: "Pkdpn"
				}))), r.a.createElement(m.g, {
					className: x.a.modalFooter
				}, r.a.createElement(m.a, {
					onClick: k
				}, n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(b.t, {
					className: x.a.SaveButton,
					onClick: async () => {
						g(Object(l.j)(e, {
							publicDescription: s
						}, {}, !0)), await E({
							input: {
								subredditId: e,
								cardId: "add_descr"
							}
						}), M(Object(y.d)(t, "add_descr")), g(Object(u.b)(e)), k()
					}
				}, n.fbt._("Save", null, {
					hk: "4yMsMq"
				}))))
			})
		},
		"./src/reddit/endpoints/subreddit/newCommunityProgress.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/redditGQL/operations/CompleteCommunityProgressCard.json"),
				o = s("./src/redditGQL/operations/CompleteCommunityProgressModule.json"),
				r = s("./src/redditGQL/operations/DismissCommunityProgressCard.json"),
				a = s("./src/redditGQL/operations/DismissCommunityProgressCardV2.json"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/reddit/actions/subreddit/questions.ts");
			const d = (e, t) => Object(c.a)(e, {
					...r,
					variables: t
				}),
				u = (e, t) => Object(c.a)(e, {
					...a,
					variables: t
				}),
				l = (e, t) => Object(c.a)(e, {
					...n,
					variables: t
				}),
				m = (e, t) => Object(c.a)(e, {
					...o,
					variables: t
				}),
				p = (e, t) => async (s, n, o) => {
					let {
						gqlContext: r
					} = o;
					const a = {
						input: {
							subredditId: e,
							moduleId: t
						}
					};
					await m(r(), a), s(Object(i.b)(e))
				}
		},
		"./src/reddit/helpers/trackers/communityProgressModule.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return l
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");

			function o(e, t) {
				return {
					moduleName: e.id,
					cardName: t
				}
			}
			const r = (e, t) => s => ({
					...Object(n.q)(s),
					source: "new_community_setup",
					action: "view",
					noun: "progress_module",
					progressModule: o(e),
					actionInfo: {
						pageType: "community",
						reason: t
					},
					subreddit: Object(n.nb)(s)
				}),
				a = (e, t, s) => r => ({
					...Object(n.q)(r),
					source: "new_community_setup",
					action: "click",
					noun: "card_action_button",
					progressModule: o(e, t),
					actionInfo: {
						pageType: "community",
						...s && {
							reason: s
						}
					},
					subreddit: Object(n.nb)(r)
				}),
				c = e => t => ({
					...Object(n.q)(t),
					source: "new_community_setup",
					action: "click",
					noun: "expand_progress_module",
					progressModule: o(e),
					actionInfo: {
						pageType: "community",
						reason: "expanded_module"
					},
					subreddit: Object(n.nb)(t)
				}),
				i = e => t => ({
					...Object(n.q)(t),
					source: "new_community_setup",
					action: "click",
					noun: "collapse_progress_module",
					progressModule: o(e),
					actionInfo: {
						pageType: "community",
						reason: "collapses_module"
					},
					subreddit: Object(n.nb)(t)
				}),
				d = (e, t) => s => ({
					...Object(n.q)(s),
					source: "new_community_setup",
					action: "click",
					noun: "card_menu_button",
					progressModule: o(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(n.nb)(s)
				}),
				u = (e, t) => s => ({
					...Object(n.q)(s),
					source: "new_community_setup",
					action: "click",
					noun: "dismiss",
					progressModule: o(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(n.nb)(s)
				}),
				l = (e, t) => s => ({
					...Object(n.q)(s),
					source: "new_community_setup",
					action: "click",
					noun: "complete",
					progressModule: o(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(n.nb)(s)
				})
		},
		"./src/redditGQL/operations/CompleteCommunityProgressCard.json": function(e) {
			e.exports = JSON.parse('{"id":"de7c5c2c6959"}')
		},
		"./src/redditGQL/operations/CompleteCommunityProgressModule.json": function(e) {
			e.exports = JSON.parse('{"id":"662c7500e8b7"}')
		},
		"./src/redditGQL/operations/DismissCommunityProgressCard.json": function(e) {
			e.exports = JSON.parse('{"id":"d43940dddaf7"}')
		},
		"./src/redditGQL/operations/DismissCommunityProgressCardV2.json": function(e) {
			e.exports = JSON.parse('{"id":"af0a685394e2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EditCommunityDescriptionModal.ebc4d86463a6e5dd220b.js.map