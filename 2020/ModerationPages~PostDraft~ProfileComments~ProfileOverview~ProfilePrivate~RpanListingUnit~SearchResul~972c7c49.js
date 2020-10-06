// https://www.redditstatic.com/desktop2x/ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49.46cf6639b34033760098.js
// Retrieved at 10/5/2020, 8:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"], {
		"./src/reddit/actions/postCollection/index.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return D
			})), o.d(e, "e", (function() {
				return U
			})), o.d(e, "g", (function() {
				return A
			})), o.d(e, "a", (function() {
				return K
			})), o.d(e, "c", (function() {
				return W
			})), o.d(e, "h", (function() {
				return V
			})), o.d(e, "f", (function() {
				return Z
			})), o.d(e, "d", (function() {
				return nt
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				c = o("./node_modules/react-router-redux/es/index.js"),
				s = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				l = o("./src/reddit/actions/postCollection/constants.ts"),
				r = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/constants/history.ts"),
				a = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var O = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var m = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/create_collection.json"),
				method: a.db.POST,
				data: {
					title: e,
					sr_fullname: o
				}
			});
			var j = (t, e) => Object(u.a)(Object(p.a)(t, [b.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: a.db.POST,
					data: {
						collection_id: e
					}
				}),
				f = o("./src/config.ts");
			var C = (t, e) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(f.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(e),
				method: a.db.GET
			});
			var _ = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var g = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					title: o
				}
			});
			var x = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					link_ids: o.join(",")
				}
			});
			var k = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					description: o
				}
			});
			var w = (t, e, o) => Object(u.a)(Object(p.a)(t, [b.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: a.db.POST,
					data: {
						collection_id: e,
						display_layout: o
					}
				}),
				I = o("./src/reddit/helpers/overlay/index.ts"),
				v = o("./src/reddit/helpers/path/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/selectors/postCollection.ts"),
				y = o("./src/reddit/selectors/posts.ts"),
				S = o("./src/reddit/selectors/subreddit.ts");
			const T = Object(i.a)(l.c),
				M = Object(i.a)(l.b),
				P = Object(i.a)(l.d),
				D = (t, e) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(T());
					const i = await m(s(), t, e);
					let l;
					if (i.ok) {
						const t = n().meta,
							e = (t => ({
								author: t.author_name || void 0,
								createdAtUTC: t.created_at_utc,
								description: t.description,
								displayLayout: t.display_layout,
								id: t.collection_id,
								lastUpdateUTC: t.last_update_utc,
								permalink: t.permalink,
								postIds: t.link_ids,
								primaryPostId: t.primary_link_id || void 0,
								subredditId: t.subreddit_id,
								title: t.title
							}))(i.body);
						o(P({
							collection: e,
							meta: t
						})), l = e
					} else {
						const t = i.error;
						o(M(t))
					}
					return l
				}, L = Object(i.a)(l.f), U = t => async (e, o, c) => {
					let {
						apiContext: s
					} = c;
					const i = o().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const l = await C(s(), t);
					l.ok ? e(L(l.body)) : e(Object(r.e)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, N = Object(i.a)(l.g), A = (t, e, o) => async (c, s, i) => {
					let {
						apiContext: l
					} = i;
					if ((await _(l(), t, e)).ok) {
						const i = s(),
							l = Object(y.N)(i, {
								postId: e
							}),
							d = l && l.title || "",
							a = Object(E.r)(i, {
								collectionId: t
							}),
							u = (a && a.postIds && a.postIds.indexOf(e) || -1) - 1;
						if (c(N({
								collectionId: t,
								postId: e
							})), o && u >= 0) {
							const e = s(),
								o = Object(E.r)(e, {
									collectionId: t
								}),
								n = o && o.postIds && o.postIds[u] || "",
								i = Object(y.N)(e, {
									postId: n
								});
							i && i.permalink && c(Object(I.a)(i.permalink))
						}
						c(Object(r.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Following post removed from collection successfully: {postTitle}", [n.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: n.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: K(t, e)
						}))
					} else c(Object(r.e)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(i.a)(l.a), F = Object(i.a)(l.t), K = (t, e) => async (o, c, s) => {
					let {
						apiContext: i
					} = s;
					const l = c();
					if ((await O(i(), t, e)).ok) {
						o(B({
							collectionId: t,
							postId: e
						})), o(F({
							collectionId: t,
							postId: e
						}));
						const c = Object(y.N)(l, {
								postId: e
							}),
							s = Object(E.r)(l, {
								collectionId: t
							}),
							i = s && s.title || "";
						o(Object(r.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Success! You added a post to the collection: {title}", [n.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: n.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(I.a)(c.permalink)
						}))
					} else o(Object(r.e)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, R = Object(i.a)(l.e), W = (t, e) => async (o, i, l) => {
					let {
						apiContext: d
					} = l;
					const a = i();
					if ((await j(d(), t)).ok) {
						const {
							url: i
						} = a.platform.currentPage, l = Object(E.r)(a, {
							collectionId: t
						}), d = l && l.title || "", u = l && l.subredditId, p = u ? Object(S.c)(a, u) : "/";
						o(R({
							collectionId: t,
							collection: l
						})), o(e ? Object(c.c)(Object(s.a)(i, ["collection"])) : Object(c.b)(p)), o(Object(r.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Collection deleted successfully: {title}", [n.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else o(Object(r.e)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(l.r), J = Object(i.a)(l.n), Y = Object(i.a)(l.s), V = (t, e) => async (o, c, s) => {
					let {
						apiContext: i
					} = s;
					o(G());
					const l = await g(i(), t, e);
					let d = !1;
					if (l.ok) o(Y({
						collectionId: t,
						newTitle: e
					})), o(Object(r.e)({
						kind: h.b.SuccessMod,
						text: n.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), d = !0;
					else {
						const t = l.error;
						o(J(t)), o(Object(r.e)({
							kind: h.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return d
				}, q = Object(i.a)(l.l), z = Object(i.a)(l.m), H = Object(i.a)(l.k), Z = t => async (e, o) => {
					const n = o().platform.currentPage.locationState;
					e(!(!n || !n[d.a.IsOverlay]) ? Object(I.a)(t.permalink) : Object(c.b)(Object(v.b)(t.permalink)))
				}, X = Object(i.a)(l.i), Q = Object(i.a)(l.j), $ = Object(i.a)(l.h), tt = Object(i.a)(l.p), et = Object(i.a)(l.o), ot = Object(i.a)(l.q), nt = t => async e => {
					const o = [],
						{
							collectionId: c,
							description: s,
							displayLayout: i,
							postIds: l,
							title: d
						} = t;
					l && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(X());
						const l = await x(i(), t, e);
						let d = !1;
						return l.ok ? (o(Q({
							collectionId: t,
							postIds: e
						})), o(Object(r.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), d = !0) : (o($({
							error: l.error
						})), o(Object(r.e)({
							kind: h.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), d
					})(c, l))), d && o.push(e(V(c, d))), void 0 !== s && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(q());
						const l = await k(i(), t, e);
						let d = !1;
						if (l.ok) o(z({
							collectionId: t,
							newDescription: e
						})), o(Object(r.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), d = !0;
						else {
							const t = l.error;
							o(H(t)), o(Object(r.e)({
								kind: h.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return d
					})(c, s))), i && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(tt());
						const l = await w(i(), t, e);
						let d = !1;
						if (l.ok) o(ot({
							collectionId: t,
							newLayout: e
						})), o(Object(r.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), d = !0;
						else {
							const t = l.error;
							o(et(t)), o(Object(r.e)({
								kind: h.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return d
					})(c, i)));
					let a = !0;
					return await Promise.all(o).then(t => {
						t.forEach(t => {
							t || (a = !1)
						})
					}), a
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(t, e, o) {
			t.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				c = o("./node_modules/react/index.js"),
				s = o.n(c),
				i = o("./src/higherOrderComponents/asModal/index.tsx"),
				l = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				r = o("./src/reddit/controls/TextButton/index.tsx"),
				d = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				a = o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = o.n(a);
			const p = t => t.preventDefault();
			e.a = Object(i.a)(t => s.a.createElement(l.d, null, s.a.createElement(l.h, null, s.a.createElement(d.a, null, s.a.createElement(l.p, null, t.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(r.a, {
				onClick: () => {
					t.onClose && t.onClose(), t.toggleModal && t.toggleModal()
				}
			}, s.a.createElement(l.b, null)))), s.a.createElement(l.k, null, s.a.createElement(l.o, {
				className: u.a.ModalText
			}, t.modalText)), s.a.createElement(l.f, null, !t.hideCancelButton && s.a.createElement(l.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					t.onCancel && t.onCancel(), t.toggleModal && t.toggleModal()
				},
				"data-redditstyle": !t.disableRedditStyle
			}, t.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(l.t, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: e => {
					t.onConfirm(), t.toggleModal && t.toggleModal(), t.trackClick && t.trackClick()
				},
				"data-redditstyle": !t.disableRedditStyle
			}, t.actionText))))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(t, e, o) {
			t.exports = {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return k
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				c = o("./node_modules/react/index.js"),
				s = o.n(c),
				i = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				r = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				m = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(j);
			const C = d.a.wrapped(p.a, "_Dropdown", f.a),
				_ = Object(u.a)(C),
				g = d.a.button("MenuButton", f.a),
				x = d.a.wrapped(O.a, "MenuIcon", f.a),
				k = d.a.wrapped(b.b, "DropdownRow", f.a),
				w = Object(l.c)({
					dropdownIsOpen: (t, e) => {
						let {
							dropdownId: o
						} = e;
						return Object(m.b)(o)(t)
					}
				}),
				I = Object(i.b)(w, (t, e) => {
					let {
						dropdownId: o
					} = e;
					return {
						toggleDropdown: () => t(Object(a.h)({
							tooltipId: o
						}))
					}
				}),
				v = t => e => {
					t.onClick && t.onClick(), t.toggleDropdown(), e.stopPropagation()
				};
			e.b = I(t => s.a.createElement(g, {
				"aria-expanded": t.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(r.a)(t.className, {
					[f.a.mIsEnabled]: !t.disabled && !t.defaultButtonOutline
				}),
				disabled: t.disabled,
				onClick: v(t),
				onMouseDown: t.handleMouseDown,
				id: t.dropdownId
			}, t.icon ? t.icon : s.a.createElement(x, null), s.a.createElement(_, {
				className: t.dropdownClassName,
				isOpen: t.dropdownIsOpen,
				tooltipId: t.dropdownId,
				isFixed: t.isFixed,
				targetPosition: t.targetPosition,
				tooltipPosition: t.tooltipPosition
			}, t.children)))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "h", (function() {
				return d
			})), o.d(e, "g", (function() {
				return a
			})), o.d(e, "o", (function() {
				return u
			})), o.d(e, "f", (function() {
				return b
			})), o.d(e, "e", (function() {
				return O
			})), o.d(e, "n", (function() {
				return m
			})), o.d(e, "m", (function() {
				return j
			})), o.d(e, "b", (function() {
				return C
			})), o.d(e, "p", (function() {
				return _
			})), o.d(e, "c", (function() {
				return g
			})), o.d(e, "j", (function() {
				return x
			})), o.d(e, "q", (function() {
				return k
			})), o.d(e, "k", (function() {
				return w
			})), o.d(e, "l", (function() {
				return I
			})), o.d(e, "i", (function() {
				return v
			})), o.d(e, "d", (function() {
				return h
			}));
			var n, c, s = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/helpers/trackers/postEvent.ts"),
				l = o("./src/reddit/selectors/platform.ts"),
				r = o("./src/reddit/selectors/telemetry.ts");
			! function(t) {
				t.collection = "collection", t.collectionComposer = "collection_composer", t.postComposer = "post_composer", t.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(t) {
				t.post = "post", t.follow = "follow", t.unfollow = "unfollow", t.screen = "screen", t.eventEducation = "event_education", t.eventEducationGotIt = "event_education_got_it", t.collectionEducation = "collection_education", t.collectionEducationGotIt = "collection_education_got_it", t.collectionCancel = "cancel", t.collectionCreate = "collection_create", t.collectionSelect = "collection_select", t.collectionDelete = "collection_delete", t.collectionEdit = "collection_edit", t.collectionAddPost = "collection_add_post", t.collectionRemovePost = "remove_post_from_collection", t.startEvent = "start_event"
			}(c || (c = {}));
			const d = t => e => Object.assign({
					source: n.collection,
					noun: c.post
				}, p(e, t)),
				a = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: n.collection,
						noun: o ? c.unfollow : c.follow
					}, p(t, e))
				},
				u = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: i.a.postEvent,
						noun: o ? c.unfollow : c.follow
					}, p(t, e))
				},
				p = (t, e) => {
					const o = Object.assign(Object.assign({}, r.defaults(t)), {
						action: s.c.CLICK,
						subreddit: r.subreddit(t)
					});
					return void 0 === e ? o : Object.assign(Object.assign({}, o), {
						post: r.post(t, e),
						postCollection: r.postCollectionI13nSelector(t, {
							postId: e
						}),
						postEvent: r.postEventI13nSelector(t, {
							postId: e
						})
					})
				},
				b = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				O = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				m = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				j = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				f = t => Object.assign(Object.assign({}, r.defaults(t)), {
					subreddit: r.subreddit(t),
					source: n.postComposer
				}),
				C = (t, e) => o => Object.assign(Object.assign({}, p(o, t)), {
					source: e || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				_ = t => e => Object.assign(Object.assign({}, p(e, t)), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				g = () => t => Object.assign(Object.assign({}, p(t)), {
					source: n.collectionComposer,
					noun: c.collectionCancel
				}),
				x = () => t => {
					const e = Object(l.o)(t) || void 0;
					return Object.assign(Object.assign({}, p(t, e)), {
						source: n.collectionComposer,
						noun: c.collectionCreate
					})
				},
				k = () => t => Object.assign(Object.assign({}, p(t)), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				w = t => e => Object.assign(Object.assign({}, r.defaults(e)), {
					subreddit: r.subreddit(e),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: r.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				I = t => e => Object.assign(Object.assign({}, p(e)), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: r.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				v = t => e => Object.assign(Object.assign({}, p(e, t)), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				h = () => t => {
					const e = Object(l.o)(t) || void 0;
					return Object.assign(Object.assign({}, p(t, e)), {
						source: n.collectionComposer,
						action: s.c.VIEW,
						noun: c.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "f", (function() {
				return O
			})), o.d(e, "g", (function() {
				return m
			})), o.d(e, "e", (function() {
				return j
			})), o.d(e, "b", (function() {
				return f
			})), o.d(e, "c", (function() {
				return C
			})), o.d(e, "d", (function() {
				return _
			}));
			var n, c = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				l = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/models/PostCreationForm/index.ts"),
				d = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/telemetry/index.ts");
			! function(t) {
				t.postEvent = "post_event", t.postComposer = "post_composer", t.eventComposer = "event_composer"
			}(n || (n = {}));
			const b = t => u.actionInfo(t, {
					pageType: "event_submit"
				}),
				O = t => {
					Object(p.a)(Object.assign(Object.assign({}, u.defaults(t)), {
						source: n.postComposer,
						action: l.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(t)
					}))
				},
				m = t => {
					Object(p.a)(Object.assign(Object.assign({}, u.defaults(t)), {
						source: n.postComposer,
						action: l.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(t),
						postEvent: g(t),
						postComposer: x(t)
					}))
				},
				j = () => t => ({
					source: n.eventComposer,
					action: l.c.VIEW,
					noun: l.b.SCREEN,
					actionInfo: b(t),
					postEvent: g(t)
				}),
				f = t => e => Object.assign(Object.assign({}, I(e, Object(d.o)(e))), {
					source: n.postComposer,
					noun: "apply",
					postComposer: k(t)
				}),
				C = () => t => Object.assign(Object.assign({}, I(t, Object(d.o)(t))), {
					noun: "cancel",
					actionInfo: b(t)
				}),
				_ = t => e => Object.assign(Object.assign({}, I(e, Object(d.o)(e))), {
					noun: "delete",
					actionInfo: b(e),
					postComposer: x(e),
					postEvent: w(t)
				}),
				g = t => {
					const e = Object(a.p)(t);
					return e && w(e)
				},
				x = t => k(Object(a.p)(t)),
				k = t => {
					return {
						postScheduled: !!t,
						submitScheduledTime: t && t.submitTime === r.i.AtEventTime ? Object(i.f)(t.startDate).getTime() / c.Fb : void 0
					}
				},
				w = t => {
					const e = Object(i.f)(t.startDate).getTime() / c.Fb,
						o = Object(i.f)(t.endDate).getTime() / c.Fb;
					return {
						eventStartTimestamp: e,
						eventEndTimestamp: o,
						eventState: Object(s.e)(e, o)
					}
				},
				I = (t, e) => {
					const o = {
						source: n.eventComposer,
						action: l.c.CLICK,
						subreddit: u.subreddit(t)
					};
					return e ? Object.assign(Object.assign({}, o), {
						post: u.post(t, e),
						postEvent: u.postEventI13nSelector(t, {
							postId: e
						}),
						postCollection: u.postCollectionI13nSelector(t, {
							postId: e
						})
					}) : o
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49.46cf6639b34033760098.js.map