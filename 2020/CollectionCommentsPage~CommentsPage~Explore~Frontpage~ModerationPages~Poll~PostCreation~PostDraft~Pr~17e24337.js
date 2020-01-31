// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337.09d654703b5c94a7e95d.js
// Retrieved at 1/30/2020, 7:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"], {
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/react-router-redux/es/index.js"),
				c = o("./src/app/strings/index.ts"),
				s = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/postCollection/constants.ts"),
				l = o("./src/reddit/actions/toaster.ts"),
				a = o("./src/reddit/constants/history.ts"),
				d = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var O = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var m = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/create_collection.json"),
				method: d.bb.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var j = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: d.bb.POST,
					data: {
						collection_id: t
					}
				}),
				g = o("./src/config.ts");
			var C = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(g.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(t),
				method: d.bb.GET
			});
			var f = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var _ = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var x = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var I = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var v = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: d.bb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				w = o("./src/reddit/helpers/overlay/index.ts"),
				E = o("./src/reddit/helpers/path/index.ts"),
				k = o("./src/reddit/models/Toast/index.ts"),
				y = o("./src/reddit/selectors/postCollection.ts"),
				M = o("./src/reddit/selectors/posts.ts"),
				h = o("./src/reddit/selectors/subreddit.ts");
			o.d(t, "b", (function() {
				return P
			})), o.d(t, "e", (function() {
				return U
			})), o.d(t, "g", (function() {
				return N
			})), o.d(t, "a", (function() {
				return W
			})), o.d(t, "c", (function() {
				return G
			})), o.d(t, "h", (function() {
				return Y
			})), o.d(t, "f", (function() {
				return J
			})), o.d(t, "d", (function() {
				return ne
			}));
			const S = Object(i.a)(r.c),
				T = Object(i.a)(r.b),
				D = Object(i.a)(r.d),
				P = (e, t) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(S());
					const i = await m(s(), e, t);
					let r;
					if (i.ok) {
						const e = n().meta,
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
							}))(i.body);
						o(D({
							collection: t,
							meta: e
						})), r = t
					} else {
						const e = i.error;
						o(T(e))
					}
					return r
				}, L = Object(i.a)(r.f), U = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const i = o(),
						r = i.postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const a = await C(s(), e);
					a.ok ? t(L(a.body)) : t(Object(l.e)({
						kind: k.b.Error,
						text: Object(c.a)(i.user.language, "error.type.generic")
					}))
				}, A = Object(i.a)(r.g), N = (e, t, o) => async (n, s, i) => {
					let {
						apiContext: r
					} = i;
					if ((await f(r(), e, t)).ok) {
						const i = s(),
							r = Object(M.I)(i, {
								postId: t
							}),
							a = r && r.title || "",
							d = Object(y.q)(i, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (n(A({
								collectionId: e,
								postId: t
							})), o && u >= 0) {
							const t = s(),
								o = Object(y.q)(t, {
									collectionId: e
								}),
								c = o && o.postIds && o.postIds[u] || "",
								i = Object(M.I)(t, {
									postId: c
								});
							i && i.permalink && n(Object(w.a)(i.permalink))
						}
						n(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(i.user.language, "collection.postRemovedSuccess", {
								postTitle: a
							}),
							buttonText: Object(c.a)(i.user.language, "collection.undo"),
							buttonAction: W(e, t)
						}))
					} else {
						const e = s();
						n(Object(l.e)({
							kind: k.b.Error,
							text: Object(c.a)(e.user.language, "error.type.generic")
						}))
					}
				}, B = Object(i.a)(r.a), F = Object(i.a)(r.t), W = (e, t) => async (o, n, s) => {
					let {
						apiContext: i
					} = s;
					const r = n();
					if ((await O(i(), e, t)).ok) {
						o(B({
							collectionId: e,
							postId: t
						})), o(F({
							collectionId: e,
							postId: t
						}));
						const n = Object(M.I)(r, {
								postId: t
							}),
							s = Object(y.q)(r, {
								collectionId: e
							}),
							i = s && s.title || "";
						o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(r.user.language, "collection.postAddedSuccess", {
								title: i
							}),
							buttonText: Object(c.a)(r.user.language, "collection.view"),
							buttonAction: Object(w.a)(n.permalink)
						}))
					} else o(Object(l.e)({
						kind: k.b.Error,
						text: Object(c.a)(r.user.language, "error.type.generic")
					}))
				}, q = Object(i.a)(r.e), G = (e, t) => async (o, i, r) => {
					let {
						apiContext: a
					} = r;
					const d = i();
					if ((await j(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, r = Object(y.q)(d, {
							collectionId: e
						}), a = r && r.title || "", u = r && r.subredditId, p = u ? Object(h.c)(d, u) : "/";
						o(q({
							collectionId: e,
							collection: r
						})), o(t ? Object(n.c)(Object(s.a)(i, ["collection"])) : Object(n.b)(p)), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.collectionDeletedSuccess", {
								title: a
							})
						}))
					} else o(Object(l.e)({
						kind: k.b.Error,
						text: Object(c.a)(d.user.language, "error.type.generic")
					}))
				}, K = Object(i.a)(r.r), R = Object(i.a)(r.n), z = Object(i.a)(r.s), Y = (e, t) => async (o, n, s) => {
					let {
						apiContext: i
					} = s;
					o(K());
					const r = await _(i(), e, t);
					let a = !1;
					const d = n();
					if (r.ok) o(z({
						collectionId: e,
						newTitle: t
					})), o(Object(l.e)({
						kind: k.b.SuccessMod,
						text: Object(c.a)(d.user.language, "collection.editModal.titleUpdateSuccess")
					})), a = !0;
					else {
						const e = r.error;
						o(R(e)), o(Object(l.e)({
							kind: k.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))
					}
					return a
				}, V = Object(i.a)(r.l), Z = Object(i.a)(r.m), H = Object(i.a)(r.k), J = e => async (t, o) => {
					const c = o().platform.currentPage.locationState;
					t(!(!c || !c[a.a.IsOverlay]) ? Object(w.a)(e.permalink) : Object(n.b)(Object(E.b)(e.permalink)))
				}, X = Object(i.a)(r.i), Q = Object(i.a)(r.j), $ = Object(i.a)(r.h), ee = Object(i.a)(r.p), te = Object(i.a)(r.o), oe = Object(i.a)(r.q), ne = e => async t => {
					const o = [],
						{
							collectionId: n,
							description: s,
							displayLayout: i,
							postIds: r,
							title: a
						} = e;
					r && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: i
						} = s;
						o(X());
						const r = await x(i(), e, t);
						let a = !1;
						const d = n();
						return r.ok ? (o(Q({
							collectionId: e,
							postIds: t
						})), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.reorderCollectionSuccess")
						})), a = !0) : (o($({
							error: r.error
						})), o(Object(l.e)({
							kind: k.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))), a
					})(n, r))), a && o.push(t(Y(n, a))), void 0 !== s && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: i
						} = s;
						o(V());
						const r = await I(i(), e, t);
						let a = !1;
						const d = n();
						if (r.ok) o(Z({
							collectionId: e,
							newDescription: t
						})), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.descriptionUpdateSuccess")
						})), a = !0;
						else {
							const e = r.error;
							o(H(e)), o(Object(l.e)({
								kind: k.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return a
					})(n, s))), i && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: i
						} = s;
						o(ee());
						const r = await v(i(), e, t);
						let a = !1;
						const d = n();
						if (r.ok) o(oe({
							collectionId: e,
							newLayout: t
						})), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.layoutUpdateSuccess")
						})), a = !0;
						else {
							const e = r.error;
							o(te(e)), o(Object(l.e)({
								kind: k.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return a
					})(n, i)));
					let d = !0;
					return await Promise.all(o).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, o) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./src/higherOrderComponents/asModal/index.tsx"),
				i = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				r = o("./src/reddit/controls/TextButton/index.tsx"),
				l = o("./src/reddit/i18n/utils.ts"),
				a = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = o.n(d);
			const p = e => e.preventDefault();
			t.a = Object(s.a)(e => c.a.createElement(i.c, null, c.a.createElement(i.g, null, c.a.createElement(a.a, null, c.a.createElement(i.n, null, e.headerText || Object(l.c)("Confirm")), c.a.createElement(r.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, c.a.createElement(i.b, null)))), c.a.createElement(i.j, null, c.a.createElement(i.m, {
				className: u.a.ModalText
			}, e.modalText)), c.a.createElement(i.e, null, c.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(l.c)("Cancel")), c.a.createElement(i.r, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return I
			}));
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				r = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				m = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/OverflowMenu/index.m.less"),
				g = o.n(j);
			const C = l.a.wrapped(p.a, "_Dropdown", g.a),
				f = Object(u.a)(C),
				_ = l.a.button("MenuButton", g.a),
				x = l.a.wrapped(O.a, "MenuIcon", g.a),
				I = l.a.wrapped(b.b, "DropdownRow", g.a),
				v = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(m.b)(o)(e)
					}
				}),
				w = Object(s.b)(v, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(a.g)({
							tooltipId: o
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => c.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(d.c)("more options"),
				className: Object(r.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : c.a.createElement(x, null), c.a.createElement(f, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "h", (function() {
				return a
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "o", (function() {
				return u
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "e", (function() {
				return O
			})), o.d(t, "n", (function() {
				return m
			})), o.d(t, "m", (function() {
				return j
			})), o.d(t, "b", (function() {
				return C
			})), o.d(t, "p", (function() {
				return f
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "j", (function() {
				return x
			})), o.d(t, "q", (function() {
				return I
			})), o.d(t, "k", (function() {
				return v
			})), o.d(t, "l", (function() {
				return w
			})), o.d(t, "i", (function() {
				return E
			})), o.d(t, "d", (function() {
				return k
			}));
			var n, c, s = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/helpers/trackers/postEvent.ts"),
				r = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(c || (c = {}));
			const a = e => t => Object.assign({
					source: n.collection,
					noun: c.post
				}, p(t, e)),
				d = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => Object.assign({
						source: n.collection,
						noun: o ? c.unfollow : c.follow
					}, p(e, t))
				},
				u = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => Object.assign({
						source: i.a.postEvent,
						noun: o ? c.unfollow : c.follow
					}, p(e, t))
				},
				p = (e, t) => {
					const o = Object.assign({}, l.defaults(e), {
						action: s.c.CLICK,
						subreddit: l.subreddit(e)
					});
					return void 0 === t ? o : Object.assign({}, o, {
						post: l.post(e, t),
						postCollection: l.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: l.postEventI13nSelector(e, {
							postId: t
						})
					})
				},
				b = e => Object.assign({}, g(e), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				O = e => Object.assign({}, g(e), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				m = e => Object.assign({}, g(e), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				j = e => Object.assign({}, g(e), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				g = e => Object.assign({}, l.defaults(e), {
					subreddit: l.subreddit(e),
					source: n.postComposer
				}),
				C = (e, t) => o => Object.assign({}, p(o, e), {
					source: t || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				f = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				_ = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionCancel
				}),
				x = () => e => {
					const t = Object(r.o)(e) || void 0;
					return Object.assign({}, p(e, t), {
						source: n.collectionComposer,
						noun: c.collectionCreate
					})
				},
				I = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				v = e => t => Object.assign({}, l.defaults(t), {
					subreddit: l.subreddit(t),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: l.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				w = e => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: l.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				E = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				k = () => e => {
					const t = Object(r.o)(e) || void 0;
					return Object.assign({}, p(e, t), {
						source: n.collectionComposer,
						action: s.c.VIEW,
						noun: c.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "f", (function() {
				return O
			})), o.d(t, "g", (function() {
				return m
			})), o.d(t, "e", (function() {
				return j
			})), o.d(t, "b", (function() {
				return g
			})), o.d(t, "c", (function() {
				return C
			})), o.d(t, "d", (function() {
				return f
			}));
			var n, c = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				r = o("./src/reddit/constants/tracking.ts"),
				l = o("./src/reddit/models/PostCreationForm/index.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const b = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				O = e => {
					Object(p.a)(Object.assign({}, u.defaults(e), {
						source: n.postComposer,
						action: r.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					}))
				},
				m = e => {
					Object(p.a)(Object.assign({}, u.defaults(e), {
						source: n.postComposer,
						action: r.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: _(e),
						postComposer: x(e)
					}))
				},
				j = () => e => ({
					source: n.eventComposer,
					action: r.c.VIEW,
					noun: r.b.SCREEN,
					actionInfo: b(e),
					postEvent: _(e)
				}),
				g = e => t => Object.assign({}, w(t, Object(a.o)(t)), {
					source: n.postComposer,
					noun: "apply",
					postComposer: I(e)
				}),
				C = () => e => Object.assign({}, w(e, Object(a.o)(e)), {
					noun: "cancel",
					actionInfo: b(e)
				}),
				f = e => t => Object.assign({}, w(t, Object(a.o)(t)), {
					noun: "delete",
					actionInfo: b(t),
					postComposer: x(t),
					postEvent: v(e)
				}),
				_ = e => {
					const t = Object(d.o)(e);
					return t && v(t)
				},
				x = e => I(Object(d.o)(e)),
				I = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === l.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / c.Cb : void 0
					}
				},
				v = e => {
					const t = Object(i.f)(e.startDate).getTime() / c.Cb,
						o = Object(i.f)(e.endDate).getTime() / c.Cb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(s.e)(t, o)
					}
				},
				w = (e, t) => {
					const o = {
						source: n.eventComposer,
						action: r.c.CLICK,
						subreddit: u.subreddit(e)
					};
					return t ? Object.assign({}, o, {
						post: u.post(e, t),
						postEvent: u.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: u.postCollectionI13nSelector(e, {
							postId: t
						})
					}) : o
				}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, o) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/Menu/index.m.less"),
				r = o.n(i);
			const l = o("./src/lib/lessComponent.tsx").a.wrapped(e => c.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", r.a);
			t.a = l
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337.09d654703b5c94a7e95d.js.map