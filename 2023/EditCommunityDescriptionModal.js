// https://www.redditstatic.com/desktop2x/EditCommunityDescriptionModal.405163c4e2e23a5773ed.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EditCommunityDescriptionModal"], {
		"./src/lib/hooks/useMutation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./node_modules/react/index.js"),
				n = o("./src/reddit/hooks/useGqlContext.ts");

			function r(e) {
				const t = Object(n.a)(),
					[o, r] = Object(s.useState)(!1),
					[a, c] = Object(s.useState)(!1),
					[i, d] = Object(s.useState)(null),
					[u, l] = Object(s.useState)(null);
				return [Object(s.useCallback)(async o => {
					let s, n;
					r(!0), c(!0);
					try {
						if ((n = (s = await e(t(), o)).body).error) throw new Error(n.error.message);
						l(n.data)
					} catch (i) {
						d(i)
					} finally {
						r(!1)
					}
				}, [t, e]), {
					data: u,
					error: i,
					pending: o,
					called: a
				}]
			}
		},
		"./src/reddit/components/EditCommunityDescriptionModal/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/EditCommunityDescriptionModal/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/higherOrderComponents/asModal/index.tsx"),
				i = o("./src/lib/hooks/useMutation.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				u = o("./src/reddit/actions/subreddit/questions.ts"),
				l = o("./src/reddit/actions/subredditSettings.ts"),
				m = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = o("./src/reddit/constants/modals.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				_ = o("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				y = o("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				j = o("./src/reddit/hooks/useTracking.ts"),
				f = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				O = o("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				C = o("./src/reddit/selectors/platform.ts"),
				g = o("./src/reddit/components/EditCommunityDescriptionModal/index.m.less"),
				x = o.n(g);
			t.default = Object(c.a)(() => {
				const e = Object(a.e)(C.c),
					t = Object(a.e)(t => e && Object(O.c)(t)[e]),
					[o, c] = Object(n.useState)(""),
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
				}, r.a.createElement(m.q, null, s.fbt._("Write a description", null, {
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
					placeholder: s.fbt._("Tell people what your community is about...", null, {
						hk: "17XTOW"
					}),
					value: o
				}), r.a.createElement("label", {
					className: x.a.TextAreaLabel
				}, s.fbt._("description", null, {
					hk: "Pkdpn"
				}))), r.a.createElement(m.g, {
					className: x.a.modalFooter
				}, r.a.createElement(m.a, {
					onClick: k
				}, s.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(b.t, {
					className: x.a.SaveButton,
					onClick: async () => {
						g(Object(l.j)(e, {
							publicDescription: o
						}, {}, !0)), await E({
							input: {
								subredditId: e,
								cardId: "add_descr"
							}
						}), M(Object(y.d)(t, "add_descr")), g(Object(u.b)(e)), k()
					}
				}, s.fbt._("Save", null, {
					hk: "4yMsMq"
				}))))
			})
		},
		"./src/reddit/endpoints/subreddit/newCommunityProgress.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return d
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return p
			}));
			var s = o("./src/redditGQL/operations/CompleteCommunityProgressCard.json"),
				n = o("./src/redditGQL/operations/CompleteCommunityProgressModule.json"),
				r = o("./src/redditGQL/operations/DismissCommunityProgressCard.json"),
				a = o("./src/redditGQL/operations/DismissCommunityProgressCardV2.json"),
				c = o("./src/lib/makeGqlRequest/index.ts"),
				i = o("./src/reddit/actions/subreddit/questions.ts");
			const d = (e, t) => Object(c.a)(e, {
					...r,
					variables: t
				}),
				u = (e, t) => Object(c.a)(e, {
					...a,
					variables: t
				}),
				l = (e, t) => Object(c.a)(e, {
					...s,
					variables: t
				}),
				m = (e, t) => Object(c.a)(e, {
					...n,
					variables: t
				}),
				p = (e, t) => async (o, s, n) => {
					let {
						gqlContext: r
					} = n;
					const a = {
						input: {
							subredditId: e,
							moduleId: t
						}
					};
					await m(r(), a), o(Object(i.b)(e))
				}
		},
		"./src/reddit/helpers/trackers/communityProgressModule.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return r
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "f", (function() {
				return c
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return l
			}));
			var s = o("./src/reddit/selectors/telemetry.ts");

			function n(e, t) {
				return {
					moduleName: e.id,
					cardName: t
				}
			}
			const r = (e, t) => o => ({
					...Object(s.o)(o),
					source: "new_community_setup",
					action: "view",
					noun: "progress_module",
					progressModule: n(e),
					actionInfo: {
						pageType: "community",
						reason: t
					},
					subreddit: Object(s.lb)(o)
				}),
				a = (e, t, o) => r => ({
					...Object(s.o)(r),
					source: "new_community_setup",
					action: "click",
					noun: "card_action_button",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community",
						...o && {
							reason: o
						}
					},
					subreddit: Object(s.lb)(r)
				}),
				c = e => t => ({
					...Object(s.o)(t),
					source: "new_community_setup",
					action: "click",
					noun: "expand_progress_module",
					progressModule: n(e),
					actionInfo: {
						pageType: "community",
						reason: "expanded_module"
					},
					subreddit: Object(s.lb)(t)
				}),
				i = e => t => ({
					...Object(s.o)(t),
					source: "new_community_setup",
					action: "click",
					noun: "collapse_progress_module",
					progressModule: n(e),
					actionInfo: {
						pageType: "community",
						reason: "collapses_module"
					},
					subreddit: Object(s.lb)(t)
				}),
				d = (e, t) => o => ({
					...Object(s.o)(o),
					source: "new_community_setup",
					action: "click",
					noun: "card_menu_button",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(s.lb)(o)
				}),
				u = (e, t) => o => ({
					...Object(s.o)(o),
					source: "new_community_setup",
					action: "click",
					noun: "dismiss",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(s.lb)(o)
				}),
				l = (e, t) => o => ({
					...Object(s.o)(o),
					source: "new_community_setup",
					action: "click",
					noun: "complete",
					progressModule: n(e, t),
					actionInfo: {
						pageType: "community"
					},
					subreddit: Object(s.lb)(o)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EditCommunityDescriptionModal.405163c4e2e23a5773ed.js.map