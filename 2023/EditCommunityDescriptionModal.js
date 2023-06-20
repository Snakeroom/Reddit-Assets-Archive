// https://www.redditstatic.com/desktop2x/EditCommunityDescriptionModal.12059143bb8f0cd23059.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EditCommunityDescriptionModal"], {
		"./src/lib/hooks/useMutation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s("./src/reddit/hooks/useGqlContext.ts");

			function r(e) {
				const t = Object(n.a)(),
					[s, r] = Object(o.useState)(!1),
					[a, c] = Object(o.useState)(!1),
					[i, d] = Object(o.useState)(null),
					[u, l] = Object(o.useState)(null);
				return [Object(o.useCallback)(async s => {
					let o, n;
					r(!0), c(!0);
					try {
						if ((n = (o = await e(t(), s)).body).error) throw new Error(n.error.message);
						l(n.data)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
					[s, c] = Object(n.useState)(""),
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
				}, r.a.createElement(m.q, null, o.fbt._("Write a description", null, {
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
					placeholder: o.fbt._("Tell people what your community is about...", null, {
						hk: "17XTOW"
					}),
					value: s
				}), r.a.createElement("label", {
					className: x.a.TextAreaLabel
				}, o.fbt._("description", null, {
					hk: "Pkdpn"
				}))), r.a.createElement(m.g, {
					className: x.a.modalFooter
				}, r.a.createElement(m.a, {
					onClick: k
				}, o.fbt._("Cancel", null, {
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
				}, o.fbt._("Save", null, {
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
			var o = s("./src/redditGQL/operations/CompleteCommunityProgressCard.json"),
				n = s("./src/redditGQL/operations/CompleteCommunityProgressModule.json"),
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
					...o,
					variables: t
				}),
				m = (e, t) => Object(c.a)(e, {
					...n,
					variables: t
				}),
				p = (e, t) => async (s, o, n) => {
					let {
						gqlContext: r
					} = n;
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
			var o = s("./src/reddit/selectors/telemetry.ts");

			function n(e, t) {
				return {
					moduleName: e.id,
					cardName: t
				}
			}
			const r = (e, t) => s => ({
					...Object(o.p)(s),
					source: "new_community_setup",
					action: "view",
					noun: "progress_module",
					progressModule: n(e),
					actionInfo: {
						pageType: "community",
						reason: t
					},
					subreddit: Object(o.mb)(s)
				}),
				a = (e, t, s) => r => ({
					...Object(o.p)(r),
					source: "new_community_setup",
					action: "click",
					noun: "card_action_button",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community",
						...s && {
							reason: s
						}
					},
					subreddit: Object(o.mb)(r)
				}),
				c = e => t => ({
					...Object(o.p)(t),
					source: "new_community_setup",
					action: "click",
					noun: "expand_progress_module",
					progressModule: n(e),
					actionInfo: {
						pageType: "community",
						reason: "expanded_module"
					},
					subreddit: Object(o.mb)(t)
				}),
				i = e => t => ({
					...Object(o.p)(t),
					source: "new_community_setup",
					action: "click",
					noun: "collapse_progress_module",
					progressModule: n(e),
					actionInfo: {
						pageType: "community",
						reason: "collapses_module"
					},
					subreddit: Object(o.mb)(t)
				}),
				d = (e, t) => s => ({
					...Object(o.p)(s),
					source: "new_community_setup",
					action: "click",
					noun: "card_menu_button",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(o.mb)(s)
				}),
				u = (e, t) => s => ({
					...Object(o.p)(s),
					source: "new_community_setup",
					action: "click",
					noun: "dismiss",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(o.mb)(s)
				}),
				l = (e, t) => s => ({
					...Object(o.p)(s),
					source: "new_community_setup",
					action: "click",
					noun: "complete",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(o.mb)(s)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EditCommunityDescriptionModal.12059143bb8f0cd23059.js.map