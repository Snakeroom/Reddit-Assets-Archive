// https://www.redditstatic.com/desktop2x/PostDraft.a26e04ab6288ae05e783.js
// Retrieved at 2/7/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostDraft"], {
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return R
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "h", (function() {
				return Q
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "d", (function() {
				return re
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postCollection/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/history.ts"),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var x = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: m.jb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var f = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: m.jb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var h = (e, t) => Object(u.a)(Object(p.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: m.jb.POST,
					data: {
						collection_id: t
					}
				}),
				_ = n("./src/config.ts");
			var E = (e, t) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${_.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: m.jb.GET
			});
			var k = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: m.jb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var j = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: m.jb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var O = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: m.jb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var g = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: m.jb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var C = (e, t, n) => Object(u.a)(Object(p.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: m.jb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				y = n("./src/reddit/helpers/overlay/index.ts"),
				w = n("./src/reddit/helpers/path/index.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				M = n("./src/reddit/selectors/postCollection.ts"),
				L = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/subreddit.ts");
			const I = Object(i.a)(l.c),
				D = Object(i.a)(l.b),
				N = Object(i.a)(l.d),
				R = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					n(I());
					const r = await f(s(), e, t);
					let i;
					if (r.ok) {
						const e = o().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(r.body);
						n(N({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						n(D(e))
					}
					return i
				}, T = Object(i.a)(l.f), F = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await E(s(), e);
					i.ok ? t(T(i.body)) : t(Object(c.f)({
						kind: P.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(l.g), B = (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					if ((await k(i(), e, t)).ok) {
						const i = r(),
							a = Object(L.G)(i, {
								postId: t
							}),
							l = a && a.title || "",
							d = Object(M.q)(i, {
								collectionId: e
							}),
							m = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (s(A({
								collectionId: e,
								postId: t
							})), n && m >= 0) {
							const t = r(),
								n = Object(M.q)(t, {
									collectionId: e
								}),
								o = n && n.postIds && n.postIds[m] || "",
								i = Object(L.G)(t, {
									postId: o
								});
							i && i.permalink && s(Object(y.a)(i.permalink))
						}
						s(Object(c.f)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", l)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: z(e, t)
						}))
					} else s(Object(c.f)({
						kind: P.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(l.a), J = Object(i.a)(l.t), z = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const i = s();
					if ((await x(r(), e, t)).ok) {
						n(W({
							collectionId: e,
							postId: t
						})), n(J({
							collectionId: e,
							postId: t
						}));
						const s = Object(L.G)(i, {
								postId: t
							}),
							r = Object(M.q)(i, {
								collectionId: e
							}),
							a = r && r.title || "";
						n(Object(c.f)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(y.a)(s.permalink)
						}))
					} else n(Object(c.f)({
						kind: P.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(l.e), Z = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const l = i();
					if ((await h(a(), e)).ok) {
						const {
							url: i
						} = l.platform.currentPage, a = Object(M.q)(l, {
							collectionId: e
						}), d = a && a.title || "", m = a && a.subredditId, u = m ? Object(S.c)(l, m) : "/";
						n(U({
							collectionId: e,
							collection: a
						})), n(t ? Object(s.c)(Object(r.a)(i, ["collection"])) : Object(s.b)(u)), n(Object(c.f)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(c.f)({
						kind: P.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, H = Object(i.a)(l.r), Y = Object(i.a)(l.n), X = Object(i.a)(l.s), Q = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					n(H());
					const i = await j(r(), e, t);
					let a = !1;
					if (i.ok) n(X({
						collectionId: e,
						newTitle: t
					})), n(Object(c.f)({
						kind: P.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						n(Y(e)), n(Object(c.f)({
							kind: P.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, q = Object(i.a)(l.l), V = Object(i.a)(l.m), G = Object(i.a)(l.k), K = e => async (t, n) => {
					const o = n();
					if (Object(v.b)(o)) return void t(Object(a.ab)(Object(w.b)(e.permalink), e.id));
					const r = o.platform.currentPage.locationState;
					t(!(!r || !r[d.b.IsOverlay]) ? Object(y.a)(e.permalink) : Object(s.b)(Object(w.b)(e.permalink)))
				}, $ = Object(i.a)(l.i), ee = Object(i.a)(l.j), te = Object(i.a)(l.h), ne = Object(i.a)(l.p), oe = Object(i.a)(l.o), se = Object(i.a)(l.q), re = e => async t => {
					const n = [],
						{
							collectionId: s,
							description: r,
							displayLayout: i,
							postIds: a,
							title: l
						} = e;
					a && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n($());
						const i = await O(r(), e, t);
						let a = !1;
						return i.ok ? (n(ee({
							collectionId: e,
							postIds: t
						})), n(Object(c.f)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (n(te({
							error: i.error
						})), n(Object(c.f)({
							kind: P.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(s, a))), l && n.push(t(Q(s, l))), void 0 !== r && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(q());
						const i = await g(r(), e, t);
						let a = !1;
						if (i.ok) n(V({
							collectionId: e,
							newDescription: t
						})), n(Object(c.f)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(G(e)), n(Object(c.f)({
								kind: P.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(s, r))), i && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(ne());
						const i = await C(r(), e, t);
						let a = !1;
						if (i.ok) n(se({
							collectionId: e,
							newLayout: t
						})), n(Object(c.f)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(oe(e)), n(Object(c.f)({
								kind: P.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(s, i)));
					let d = !0;
					return await Promise.all(n).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(d);
			const u = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(c.a, null, r.a.createElement(a.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(a.g, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: n,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return s.a.createElement(i.a, l({
					className: n,
					to: c
				}, r), t)
			}

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, o = t ? c : r.a;
				return s.a.createElement(o, d({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				h = n.n(f);
			const _ = c.a.wrapped(u.a, "_Dropdown", h.a),
				E = Object(m.a)(_),
				k = c.a.button("MenuButton", h.a),
				j = c.a.wrapped(p.b, "DropdownRow", h.a),
				O = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(x.b)(t)(e)
				}),
				g = Object(i.b)(O, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = g(e => r.a.createElement(k, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(l.a)(e.className, {
					[h.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: h.a.MenuIcon
			}), r.a.createElement(E, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostDraft/PostDraftBody/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_3q6vELAuFnDnZmbmqExzMg",
				body: "_3q6vELAuFnDnZmbmqExzMg",
				Link: "_2rTucjAw93ZJDkq9nwJLD7",
				link: "_2rTucjAw93ZJDkq9nwJLD7"
			}
		},
		"./src/reddit/components/PostDraft/PostDraftFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1d32Tfg3QsqxyPty3atdyU",
				body: "_1d32Tfg3QsqxyPty3atdyU",
				Container: "_19jSl9x6Bwz7DdwRX9ZN-g",
				container: "_19jSl9x6Bwz7DdwRX9ZN-g",
				Link: "RwFNl1v4hP6QJI76vfOmd",
				link: "RwFNl1v4hP6QJI76vfOmd",
				Title: "a238I8l3sLvVu7-JolXB",
				title: "a238I8l3sLvVu7-JolXB"
			}
		},
		"./src/reddit/components/PostDraft/index.m.less": function(e, t, n) {
			e.exports = {
				ReviewDraftHeader: "_329TnDl8ot6iFg_JNstWSb",
				reviewDraftHeader: "_329TnDl8ot6iFg_JNstWSb",
				PostDraftLabel: "ZxZO0GEF-ngYA5_0oVbHw",
				postDraftLabel: "ZxZO0GEF-ngYA5_0oVbHw",
				Container: "_1LdHWcD68DAE4gaXgDEj4b",
				container: "_1LdHWcD68DAE4gaXgDEj4b",
				DraftSavedTime: "_29z00j5-e9mxfOXGuKvJAg",
				draftSavedTime: "_29z00j5-e9mxfOXGuKvJAg",
				Title: "_2_Gnd8ZH8QmWA53pTzi17M",
				title: "_2_Gnd8ZH8QmWA53pTzi17M"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.m.less": function(e, t, n) {
			e.exports = {
				PolicyRow: "_2N9ShiilNyzdd0B_i9geBj",
				policyRow: "_2N9ShiilNyzdd0B_i9geBj"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/config.ts");
			const {
				redditUrl: i
			} = r.a, a = `${i}/help/contentpolicy`, l = `${i}/wiki/reddiquette`;
			var c = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				d = n.n(c);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: d.a.PolicyRow
			}, m._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [m._param("=content policy", s.a.createElement("a", {
				href: a
			}, m._("content policy", null, {
				hk: "2PeDvo"
			}))), m._param("=reddiquette", s.a.createElement("a", {
				href: l
			}, m._("reddiquette", null, {
				hk: "uPdiw"
			})))], {
				hk: "4yQuKr"
			}))
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less": function(e, t, n) {
			e.exports = {
				Snoo: "_1XXU14d6sjwsheKLMcy7ro",
				snoo: "_1XXU14d6sjwsheKLMcy7ro",
				Li: "_2aD4E5YdfsXR-e8kLRuTEp",
				li: "_2aD4E5YdfsXR-e8kLRuTEp",
				Ol: "a5fJMl2u0aujwukxWH3if",
				ol: "a5fJMl2u0aujwukxWH3if",
				Title: "_27SYzmGZdspPn9yA9voNCY",
				title: "_27SYzmGZdspPn9yA9voNCY",
				Component: "_1Zj2sAyYL2zB-kzZQcWiW",
				component: "_1Zj2sAyYL2zB-kzZQcWiW"
			}
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				m = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				u = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.wrapped(c.a, "Snoo", u.a),
				x = p.a.li("Li", u.a),
				f = p.a.ol("Ol", u.a),
				h = p.a.div("Title", u.a),
				_ = Object(a.c)({
					submissionType: d.mb
				});
			t.a = p.a.wrapped(Object(i.b)(_)(e => {
				const {
					className: t,
					submissionType: n
				} = e, s = n === l.Vb.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, null, r.a.createElement(b, null), s ? o.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : o.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(f, null, r.a.createElement(x, null, o.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(x, null, o.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(x, null, o.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(x, null, o.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(x, null, o.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), s && r.a.createElement(x, null, o.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", u.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9",
				isOpenAIPilotV1: "xpmGc4AuyuOP6ErObihFx",
				isOpenAiPilotV1: "xpmGc4AuyuOP6ErObihFx"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(o),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/components/IdCard/async.tsx"),
				u = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				x = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				_ = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				E = n("./src/reddit/selectors/postCreations.ts"),
				k = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/widgets.ts"),
				g = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				C = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				y = n("./src/reddit/components/PostingSidebar/index.m.less"),
				w = n.n(y),
				P = n("./src/lib/lessComponent.tsx");
			const v = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				M = P.a.div("Container", w.a),
				L = Object(f.u)(),
				S = new Set(["all", "post"]),
				I = Object(d.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return n && Object(j.Q)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => S.has(e.kind))),
				D = (e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return !(!n || !Object(O.d)(e, {
						subredditName: n.name
					}))
				},
				N = Object(d.c)({
					hasIdCardWidgetData: D,
					isCreationPagePending: E.L,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(k.p)(e, {
						profileId: n
					}) : Object(f.k)(e, {
						pageLayer: t
					}),
					subreddit: f.r,
					subredditRules: I,
					currentPostCollection: f.g,
					isOpenAIPilotV1: _.f
				}),
				R = Object(c.b)(N),
				T = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: s,
						isOpenAIPilotV1: r,
						profile: a,
						subreddit: c,
						subredditRules: d
					} = e, f = o || s;
					return l.a.createElement(M, {
						className: Object(i.a)(t, {
							[w.a.isOpenAIPilotV1]: r
						})
					}, n && l.a.createElement(b.a, {
						collection: n
					}), c && f && l.a.createElement(p.a, null, l.a.createElement(m.a, {
						isSubmissionPage: !0,
						listingName: c.name
					})), a && !c && l.a.createElement(p.a, null, l.a.createElement(v, {
						profileName: a.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), c && d && l.a.createElement(p.a, null, l.a.createElement(x.a, {
						subredditName: c.name,
						display: h.h.COMPACT,
						rules: d,
						redditStyle: !0
					})), l.a.createElement(C.a, null), l.a.createElement(p.a, null), l.a.createElement(g.a, null), l.a.createElement(u.a, {
						redditStyle: !0
					}))
				};
			t.a = L(R(T))
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/OverflowMenu/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./node_modules/reselect/es/index.js"),
				k = n("./src/reddit/helpers/trackers/postCollection.ts"),
				j = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				O = n.n(j),
				g = n("./node_modules/fbt/lib/FbtPublic.js");
			const C = c.a.wrapped(f.b, "DropdownRow", O.a);
			let y;
			const w = Object(h.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				P = Object(h.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				v = Object(E.c)({
					createPostUrl: _.d,
					isDeleteConfirmModalOpen: w,
					isEditCollectionModalOpen: P,
					shouldShowCollectionEditOptions: _.s
				}),
				M = Object(a.b)(v, (e, t) => ({
					copyLink: () => e(Object(m.D)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(l.b)(n))
					},
					onRemoveCollection: () => e(Object(u.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						y || (y = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = M(Object(x.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: l,
					onCreatePost: c,
					onRemoveCollection: d,
					onToggleDeleteConfirmModal: m,
					onToggleEditModal: u,
					shouldShowCollectionEditOptions: x,
					shouldShowCreatePost: f,
					targetPosition: h,
					tooltipPosition: _,
					sendEvent: E
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(b.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: s.a,
					targetPosition: h,
					tooltipPosition: _
				}, i.a.createElement(C, {
					onClick: o,
					displayText: g.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), x && i.a.createElement(i.a.Fragment, null, i.a.createElement(C, {
					onClick: () => {
						E(Object(k.l)(n)), u()
					},
					displayText: g.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(C, {
					onClick: () => {
						E(Object(k.k)(n)), m()
					},
					displayText: g.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && i.a.createElement(C, {
					onClick: () => {
						c(r)
					},
					displayText: g.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), l && y && i.a.createElement(y, {
					collectionId: n,
					onClose: u,
					onEditSuccess: u
				}), a && i.a.createElement(p.a, {
					actionText: g.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: g.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: g.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: d,
					toggleModal: m,
					trackClick: s.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_135f7-HhEMvekPzYxVBaFE",
				activeItemIndicator: "_31zbCRopTPo2NGtlgVsrBX",
				metaLine: "_1OrlyQwYIehGSk4bhP_l2R",
				title: "_2jvQA1RLlcCLU44q6eB3g0"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/opener/index.ts"),
				d = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = n("./src/reddit/components/OverflowMenu/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				b = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				x = n.n(b);
			const f = l.a.wrapped(u.b, "DropdownRow", x.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: s,
					onStartEventNow: i,
					postPermalink: l,
					shouldShowAddEventStartTime: u,
					targetPosition: b,
					tooltipPosition: x
				} = e;
				return a.a.createElement(m.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: b,
					tooltipPosition: x
				}, u && n && a.a.createElement(f, {
					onClick: n,
					displayText: o.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(f, {
					onClick: i,
					displayText: o.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && s && a.a.createElement(f, {
					onClick: s,
					displayText: o.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(f, {
					onClick: e.onRemoveClick,
					displayText: o.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), l && a.a.createElement(d.a, {
					target: c.d.BLANK,
					rel: c.c,
					isOverlay: !1,
					to: Object(p.b)(l)
				}, a.a.createElement(f, {
					displayText: o.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "I9mI9NePKM1BEsmfZR-6H",
				container: "I9mI9NePKM1BEsmfZR-6H",
				Content: "_6d8yyfLZcJ1OXLzEXoApB",
				content: "_6d8yyfLZcJ1OXLzEXoApB",
				Title: "_1efKScSk4JSYvERdEecZnZ",
				title: "_1efKScSk4JSYvERdEecZnZ",
				Secondary: "_3fCsv_r4CtfCTdAzBRaR9N",
				secondary: "_3fCsv_r4CtfCTdAzBRaR9N"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ceAYEjQdznT14GrQQ52QV",
				content: "_36S4oraLw5gf--rC9-aWZs",
				overflowMenu: "MiZ0gbh9xe5Yiwt3RQf2o",
				metaLine: "_2JVAK9jCDOKkFXe1XS6gwH",
				title: "_2U-RjfXG1sY-NtByFOS-uC"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3_XzG2WCa3EYhqzE_vUcMN",
				topRow: "r_Dz4suUXbQkBdwR-eQ77",
				collectionDescription: "_3K3iJQYRdF3d2n1WlPxkpr",
				listContainer: "_2K8wDNk-kaP5gX-QEAXuMc",
				listWrapper: "VYYQfc9_vtbBaR47zbXdB",
				menuButton: "_1BX9a5jz4LWzuQohy4Cvz4"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/postCreations.ts"),
				d = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				m = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(l.c)({
				title: c.rb
			});
			var b = Object(a.b)(p)(e => {
					const {
						title: t
					} = e;
					return s.a.createElement("div", {
						className: m.a.container
					}, s.a.createElement("div", {
						className: m.a.activeItemIndicator
					}), t && s.a.createElement("h2", {
						className: m.a.title
					}, t), s.a.createElement("div", {
						className: m.a.metaLine
					}, u._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				x = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = n("./src/reddit/actions/postCollection/index.ts"),
				h = n("./src/reddit/helpers/path/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/components/HumanDate/index.tsx"),
				k = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				O = n.n(j),
				g = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				C = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				w = n.n(y);

			function P({
				className: e,
				isLoading: t
			}) {
				const n = Object(C.a)({
					isLoading: t
				});
				return s.a.createElement("div", {
					className: Object(r.a)(w.a.Container, e)
				}, s.a.createElement("div", {
					className: w.a.Content
				}, s.a.createElement("div", {
					className: Object(r.a)(w.a.Title, n)
				}), s.a.createElement("div", {
					className: Object(r.a)(w.a.Secondary, n)
				})))
			}
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = ["right", "bottom"], L = ["right", "top"];
			var S = Object(a.b)(() => Object(l.c)({
					post: _.G
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(f.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? s.a.createElement("div", {
						className: O.a.container
					}, s.a.createElement("div", {
						className: O.a.content
					}, s.a.createElement(x.a, {
						className: O.a.title,
						target: "_blank",
						to: Object(h.b)(t.permalink)
					}, t.title), s.a.createElement("div", {
						className: O.a.metaLine
					}, v._("Posted · {timeAgo}", [v._param("timeAgo", s.a.createElement(E.d, {
						seconds: t.created / k.Rb
					}))], {
						hk: "ZVJpV"
					}))), s.a.createElement(g.a, {
						onRemoveClick: n,
						className: O.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: M,
						tooltipPosition: L
					})) : s.a.createElement(P, {
						className: O.a.container,
						isLoading: !0
					})
				}),
				I = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				D = n.n(I);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = ["right", "bottom"], T = ["right", "top"];
			class F extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => s.a.createElement(S, {
						collectionId: this.props.collection.id,
						key: e,
						postId: e
					})
				}
				render() {
					const {
						className: e,
						collection: t
					} = this.props, n = t.postIds.map(this.renderItem).reverse();
					return s.a.createElement("div", {
						className: Object(r.a)(e, D.a.container)
					}, s.a.createElement("div", {
						className: D.a.topRow
					}, N._("Collection", null, {
						hk: "1pY1s2"
					}), s.a.createElement(i.a, {
						className: D.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: R,
						tooltipPosition: T
					})), s.a.createElement("h4", {
						className: D.a.collectionDescription
					}, t.title), s.a.createElement("div", {
						className: D.a.listWrapper
					}, s.a.createElement("div", {
						className: D.a.listContainer
					}, n)), s.a.createElement(b, null))
				}
			}
			t.a = F
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/helpers/dom/index.ts"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = n.n(x);
			const h = l.a.div("RuleShortName", f.a),
				_ = l.a.div("RuleIndex", f.a),
				E = l.a.div("RuleTitle", f.a),
				k = l.a.div("RuleDescription", f.a),
				j = l.a.wrapped(c.a, "RawHTMLDisplay", f.a),
				O = {};
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: o
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !o(e) && !!s;
					return r.a.createElement(h, {
						className: Object(a.a)({
							[f.a.pointerCursor]: i,
							[f.a.cleanStyle]: e.cleanStyle
						}),
						onClick: o(e) || !s ? void 0 : n
					}, r.a.createElement(p.a, null, r.a.createElement(_, {
						className: Object(a.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), r.a.createElement(E, null, `${e.rule.shortName}`), r.a.createElement("div", null, !o(e) && s && r.a.createElement(u.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && r.a.createElement(k, {
						className: Object(a.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? r.a.createElement(d.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: O
					}) : e.rule.descriptionHtml ? r.a.createElement(j, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const C = e => e.rules.length > 0 ? r.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: o.fbt._("{subredditName} Rules", [o.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return r.a.createElement(g, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(C, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, s.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), s.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), s.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), s.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), s.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), s.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), s.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), s.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), s.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), s.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), s.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), s.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}))))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				l = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(l.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: l.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(a);
			const c = ({
					message: e
				}) => r.a.createElement("div", {
					className: l.a.container
				}, r.a.createElement("h3", {
					className: l.a.title
				}, e || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(i.n, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => r.a.createElement("div", {
					className: l.a.container
				}, r.a.createElement("h3", {
					className: l.a.title
				}, e || o.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(i.n, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/PostDraft/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/lib/objectSelector/index.ts"),
				m = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/models/PostDraft/index.ts"),
				p = n("./src/reddit/components/PostDraft/PostDraftBody/index.m.less"),
				b = n.n(p);
			const x = l.a.h5("Body", b.a),
				f = l.a.a("Link", b.a),
				h = Object(d.b)(e => ({
					renderingObjectInfo: e.draft
				}));

			function _(e) {
				const {
					draft: t
				} = e;
				if (!t.body) return null;
				switch (t.kind) {
					case u.b.RichText:
						return t.body ? s.a.createElement(m.a, {
							content: t.body,
							rtJsonElementProps: h(e)
						}) : null;
					case u.b.Markdown:
						return s.a.createElement(x, null, t.body);
					case u.b.Link:
						return s.a.createElement(x, null, s.a.createElement(f, {
							href: t.body
						}, t.body));
					default:
						return s.a.createElement(x, null)
				}
			}
			var E = n("./src/reddit/components/PostDraft/PostDraftFooter/index.m.less"),
				k = n.n(E);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = l.a.div("Body", k.a), g = l.a.div("Container", k.a), C = l.a.a("Link", k.a), y = l.a.h5("Title", k.a);
			var w = () => s.a.createElement(g, null, s.a.createElement(y, null, j._("This is a preview of a post", null, {
					hk: "2HXXP9"
				})), s.a.createElement(O, null, j._("You are viewing a draft shared by another person. It has not yet been posted to Reddit. See something concerning?", null, {
					hk: "nY9fk"
				}), s.a.createElement(C, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
				}, j._("Report this draft", null, {
					hk: "1xcVwQ"
				})))),
				P = n("./src/reddit/components/PostDraft/index.m.less"),
				v = n.n(P),
				M = n("./src/reddit/components/HumanDate/index.tsx");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = l.a.div("ReviewDraftHeader", v.a), I = l.a.h2("PostDraftLabel", v.a), D = l.a.div("Container", v.a), N = l.a.time("DraftSavedTime", v.a), R = l.a.h1("Title", v.a), T = Object(c.u)(), F = Object(i.c)({
				profile: c.k
			});
			var A = T(Object(r.b)(F)(e => {
					const {
						draft: t,
						profile: n
					} = e;
					return t ? s.a.createElement(s.a.Fragment, null, s.a.createElement(S, null, s.a.createElement(I, null, L._("Review draft", null, {
						hk: "tclLq"
					}))), s.a.createElement(D, null, n && s.a.createElement(N, null, L._("Draft last updated by {username} {timeDiff}", [L._param("username", `u/${n.name}`), L._param("timeDiff", s.a.createElement(M.d, {
						seconds: (t.modified || t.created) / a.Rb
					}))], {
						hk: "3QCJvU"
					})), s.a.createElement(R, null, t.title), s.a.createElement(_, {
						draft: t
					}), s.a.createElement(w, null))) : null
				})),
				B = n("./src/reddit/components/PostingSidebar/index.tsx"),
				W = n("./src/reddit/layout/page/Listing/index.tsx"),
				J = n("./src/reddit/pages/ErrorPages/index.tsx"),
				z = n("./src/reddit/selectors/postDraft.ts");
			const U = Object(c.u)(),
				Z = Object(i.c)({
					draft: (e, {
						match: t
					}) => Object(z.d)(e, {
						draftId: t.params.draftId
					})
				}),
				H = Object(r.b)(Z);
			class Y extends o.Component {
				render() {
					const {
						draft: e,
						pageLayer: t
					} = this.props;
					if (!t || !e) return s.a.createElement(J.b, null);
					const n = e.subredditId;
					return s.a.createElement(W.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: s.a.createElement("div", null),
						content: s.a.createElement(A, {
							draft: e
						}),
						sidebar: n && s.a.createElement(B.a, {
							subredditOrProfileId: n
						})
					})
				}
			}
			t.default = U(H(Y))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostDraft.a26e04ab6288ae05e783.js.map