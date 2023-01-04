// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~PostCreation~ProfileComments~ProfileOverview~ProfilePrivate~Stan~7e460386.662520ba4f5c4a0ce6de.js
// Retrieved at 1/4/2023, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~PostCreation~ProfileComments~ProfileOverview~ProfilePrivate~Stan~7e460386"], {
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return F
			})), o.d(t, "e", (function() {
				return R
			})), o.d(t, "g", (function() {
				return D
			})), o.d(t, "a", (function() {
				return H
			})), o.d(t, "c", (function() {
				return X
			})), o.d(t, "h", (function() {
				return z
			})), o.d(t, "f", (function() {
				return Y
			})), o.d(t, "d", (function() {
				return re
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react-router-redux/es/index.js"),
				r = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				c = o("./src/reddit/actions/post.ts"),
				a = o("./src/reddit/actions/postCollection/constants.ts"),
				l = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/constants/history.ts"),
				u = o("./src/lib/constants/index.ts"),
				p = o("./src/lib/makeApiRequest/index.ts"),
				m = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var h = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: u.ob.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var f = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: u.ob.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var x = (e, t) => Object(p.a)(Object(m.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: u.ob.POST,
					data: {
						collection_id: t
					}
				}),
				v = o("./src/config.ts");
			var _ = (e, t) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${v.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: u.ob.GET
			});
			var C = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: u.ob.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var O = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: u.ob.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var E = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: u.ob.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var j = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: u.ob.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var g = (e, t, o) => Object(p.a)(Object(m.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: u.ob.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				k = o("./src/reddit/helpers/overlay/index.ts"),
				I = o("./src/reddit/helpers/path/index.ts"),
				y = o("./src/reddit/models/Toast/index.ts"),
				w = o("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = o("./src/reddit/selectors/postCollection.ts"),
				S = o("./src/reddit/selectors/posts.ts"),
				T = o("./src/reddit/selectors/subreddit.ts");
			const M = Object(i.a)(a.c),
				L = Object(i.a)(a.b),
				N = Object(i.a)(a.d),
				F = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					o(M());
					const i = await f(r(), e, t);
					let c;
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
						o(N({
							collection: t,
							meta: e
						})), c = t
					} else {
						const e = i.error;
						o(L(e))
					}
					return c
				}, B = Object(i.a)(a.f), R = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const c = await _(r(), e);
					c.ok ? t(B(c.body)) : t(Object(l.f)({
						kind: y.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(a.g), D = (e, t, o) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					if ((await C(c(), e, t)).ok) {
						const i = r(),
							c = Object(S.G)(i, {
								postId: t
							}),
							a = c && c.title || "",
							d = Object(P.q)(i, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (s(A({
								collectionId: e,
								postId: t
							})), o && u >= 0) {
							const t = r(),
								o = Object(P.q)(t, {
									collectionId: e
								}),
								n = o && o.postIds && o.postIds[u] || "",
								i = Object(S.G)(t, {
									postId: n
								});
							i && i.permalink && s(Object(k.a)(i.permalink))
						}
						s(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Following post removed from collection successfully: {postTitle}", [n.fbt._param("postTitle", a)], {
								hk: "8e1lV"
							}),
							buttonText: n.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: H(e, t)
						}))
					} else s(Object(l.f)({
						kind: y.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(a.a), W = Object(i.a)(a.t), H = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s();
					if ((await h(i(), e, t)).ok) {
						o(U({
							collectionId: e,
							postId: t
						})), o(W({
							collectionId: e,
							postId: t
						}));
						const s = Object(S.G)(c, {
								postId: t
							}),
							r = Object(P.q)(c, {
								collectionId: e
							}),
							i = r && r.title || "";
						o(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Success! You added a post to the collection: {title}", [n.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: n.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(k.a)(s.permalink)
						}))
					} else o(Object(l.f)({
						kind: y.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, K = Object(i.a)(a.e), X = (e, t) => async (o, i, c) => {
					let {
						apiContext: a
					} = c;
					const d = i();
					if ((await x(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, c = Object(P.q)(d, {
							collectionId: e
						}), a = c && c.title || "", u = c && c.subredditId, p = u ? Object(T.c)(d, u) : "/";
						o(K({
							collectionId: e,
							collection: c
						})), o(t ? Object(s.c)(Object(r.a)(i, ["collection"])) : Object(s.b)(p)), o(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Collection deleted successfully: {title}", [n.fbt._param("title", a)], {
								hk: "4tcOKB"
							})
						}))
					} else o(Object(l.f)({
						kind: y.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, q = Object(i.a)(a.r), V = Object(i.a)(a.n), J = Object(i.a)(a.s), z = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					o(q());
					const c = await O(i(), e, t);
					let a = !1;
					if (c.ok) o(J({
						collectionId: e,
						newTitle: t
					})), o(Object(l.f)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = c.error;
						o(V(e)), o(Object(l.f)({
							kind: y.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, G = Object(i.a)(a.l), Q = Object(i.a)(a.m), Z = Object(i.a)(a.k), Y = e => async (t, o) => {
					const n = o();
					if (Object(w.b)(n) || Object(w.c)(n)) return void t(Object(c.Z)(Object(I.b)(e.permalink), e.id));
					const r = n.platform.currentPage.locationState;
					t(!(!r || !r[d.b.IsOverlay]) ? Object(k.a)(e.permalink) : Object(s.b)(Object(I.b)(e.permalink)))
				}, $ = Object(i.a)(a.i), ee = Object(i.a)(a.j), te = Object(i.a)(a.h), oe = Object(i.a)(a.p), ne = Object(i.a)(a.o), se = Object(i.a)(a.q), re = e => async t => {
					const o = [],
						{
							collectionId: s,
							description: r,
							displayLayout: i,
							postIds: c,
							title: a
						} = e;
					c && o.push(t(((e, t) => async (o, s, r) => {
						let {
							apiContext: i
						} = r;
						o($());
						const c = await E(i(), e, t);
						let a = !1;
						return c.ok ? (o(ee({
							collectionId: e,
							postIds: t
						})), o(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (o(te({
							error: c.error
						})), o(Object(l.f)({
							kind: y.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(s, c))), a && o.push(t(z(s, a))), void 0 !== r && o.push(t(((e, t) => async (o, s, r) => {
						let {
							apiContext: i
						} = r;
						o(G());
						const c = await j(i(), e, t);
						let a = !1;
						if (c.ok) o(Q({
							collectionId: e,
							newDescription: t
						})), o(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = c.error;
							o(Z(e)), o(Object(l.f)({
								kind: y.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(s, r))), i && o.push(t(((e, t) => async (o, s, r) => {
						let {
							apiContext: i
						} = r;
						o(oe());
						const c = await g(i(), e, t);
						let a = !1;
						if (c.ok) o(se({
							collectionId: e,
							newLayout: t
						})), o(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = c.error;
							o(ne(e)), o(Object(l.f)({
								kind: y.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(s, i)));
					let d = !0;
					return await Promise.all(o).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, o) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/reddit/hooks/useTracking.ts"),
				a = o("./src/reddit/helpers/trackers/modTools.ts"),
				l = o("./src/lib/constants/index.ts"),
				d = o("./src/reddit/contexts/PageLayer/index.tsx"),
				u = o("./src/reddit/actions/tooltip.ts"),
				p = o("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				m = o("./src/reddit/components/Hovercards/helpers.ts"),
				b = o("./src/reddit/components/PostTopMeta/index.tsx"),
				h = o("./src/reddit/hooks/useIsOverlay.ts"),
				f = o("./src/reddit/models/Post/index.ts"),
				x = o("./src/redditGQL/types.ts");
			const v = Object(d.v)();
			t.a = v(e => {
				let {
					pageLayer: t,
					postOrComment: o,
					className: d
				} = e;
				var v;
				const _ = Object(h.a)(),
					C = Object(i.d)(),
					O = Object(c.a)(),
					E = (null === (v = null == t ? void 0 : t.urlParams) || void 0 === v ? void 0 : v.pageName) === l.wb.Modqueue,
					j = Object(s.useCallback)(() => {
						const e = Object(m.b)({
							itemId: o.id,
							tooltipIdPrefix: p.a,
							tooltipType: _ ? b.f.Lightbox : void 0
						});
						C(Object(u.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: x.z.Note
							}
						})), O(Object(a.a)(o.id, o.authorId))
					}, [o, C, _, O]);
				return !E || Object(f.p)(o.author) ? null : r.a.createElement("button", {
					className: d,
					onClick: j
				}, n.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = o("./src/lib/fastdom/index.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = o("./src/reddit/selectors/tooltip.ts"),
				b = o("./src/reddit/components/ContentTooltip/index.m.less"),
				h = o.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
					height: 200,
					width: 200
				},
				v = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				_ = Object(l.a)(e => {
					const {
						children: t,
						className: o,
						style: n,
						caretPosition: s,
						caretColor: i,
						onClick: c,
						hideCaret: l
					} = e;
					return r.a.createElement("div", {
						onClick: c,
						className: Object(a.a)(o, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === s,
							[h.a.caretOnLeft]: "left" === s,
							[h.a.caretOnRight]: "right" === s,
							[h.a.caretOnBottom]: "bottom" === s,
							[h.a.hideCaret]: l
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": i && i[s] ? i[s] : Object(p.a)(e).body
						}
					}, t)
				}),
				C = Object(c.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(m.b)(o)(e)
					}
				}),
				O = Object(u.a)(_, [n.a.Click, n.a.Keydown]),
				E = Object(i.b)(C);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						d.a.read(() => {
							const o = document.getElementById(e);
							if (!o) return;
							const n = o.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									s = n.left > t.width;
									break;
								case "right":
									s = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = n.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: o,
						caretPosition: n
					} = this.getPositions(e);
					return r.a.createElement(O, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = E(j)
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
				return E
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				h = o("./src/reddit/selectors/tooltip.ts"),
				f = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = o("./src/reddit/components/OverflowMenu/index.m.less"),
				v = o.n(x);
			const _ = l.a.wrapped(p.a, "_Dropdown", v.a),
				C = Object(u.a)(_),
				O = l.a.button("MenuButton", v.a),
				E = l.a.wrapped(m.b, "DropdownRow", v.a),
				j = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(h.b)(o)(e)
					}
				}),
				g = Object(i.b)(j, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: o
						}))
					}
				}),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = g(e => r.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
			}), r.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, o) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/constants/index.ts"),
				d = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = o("./src/reddit/constants/postLayout.ts"),
				b = o("./src/reddit/constants/posts.ts"),
				h = o("./src/reddit/contexts/PageLayer/index.tsx"),
				f = o("./src/reddit/helpers/isRemoved.ts"),
				x = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				_ = o("./src/reddit/icons/fonts/index.tsx"),
				C = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = o("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				g = o("./src/reddit/icons/fonts/Report/index.tsx"),
				k = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				I = o("./src/reddit/icons/fonts/Sticky/index.tsx"),
				y = o("./src/reddit/models/Post/index.ts"),
				w = o("./src/reddit/selectors/modQueue.ts"),
				P = o("./src/reddit/selectors/posts.ts"),
				S = o("./src/reddit/components/PostBadges/index.m.less"),
				T = o.n(S);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => r.a.createElement("span", M({
					className: T.a.removalReason
				}, e), e.children),
				N = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				F = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				B = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				A = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				D = (e, t, o) => {
					const n = `PostBadges--${e}--${t}`;
					return o ? `${n}--${o}` : n
				},
				U = Object(h.v)({
					isProfilePostListing: h.N,
					isSubreddit: h.Q
				}),
				W = Object(c.c)({
					isModQueueDisplayEnabled: e => {
						const t = m.e[Object(h.U)(e, {})] === m.d.Card;
						return Object(w.b)(e, t)
					},
					isPinned: (e, t) => {
						let {
							post: o
						} = t;
						return Object(P.q)(e, {
							postId: o.id
						})
					},
					modModeEnabled: h.W
				}),
				H = Object(i.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(d.i)()),
					onOpenRemovalReasonModal: () => {
						Promise.all([o.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), o.e("removalReasonActions")]).then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(o => e(o.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(d.f)({
						tooltipId: t
					}))
				}));
			t.a = U(H(e => {
				let {
					className: t,
					displayText: o,
					isSubreddit: i,
					inSubredditOrProfile: c,
					isCompactPinnedPost: d,
					isPinned: m,
					isProfilePostListing: h,
					modModeEnabled: w,
					onHideTooltip: P,
					onOpenRemovalReasonModal: S,
					onShowTooltip: U,
					post: W,
					tooltipType: H,
					isModQueueDisplayEnabled: K
				} = e;
				const X = {
						caretOnTop: !1
					},
					q = W.isRemoved && !W.modRemovalReason && !W.modNote && W.belongsTo.type === b.a.SUBREDDIT,
					V = D("Approve", W.id, H),
					J = D("Archived", W.id, H),
					z = D("Lock", W.id, H),
					G = D("Mod", W.id, H),
					Q = D("Remove", W.id, H),
					Z = D("Report", W.id, H),
					Y = D("Spam", W.id, H),
					$ = D("Sticky", W.id, H),
					ee = D("Pinned", W.id, H);
				return r.a.createElement("div", {
					className: t
				}, c && o && W.distinguishType === l.J.MODERATOR && r.a.createElement(s.Fragment, null, r.a.createElement(_.a, {
					name: "mod",
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.modIcon)
				}), r.a.createElement(u.c, M({
					tooltipId: G,
					text: B(o)
				}, X))), W.isArchived && r.a.createElement(s.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.archivedIcon),
					desc: N(),
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: J,
					text: N()
				}, X))), W.isLocked && !W.isSponsored && r.a.createElement(s.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.lockIcon),
					desc: F(),
					id: z,
					onMouseEnter: U(z),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: z,
					text: F()
				}, X))), i && Object(y.v)(W) && !d && r.a.createElement(s.Fragment, null, r.a.createElement(I.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.stickyIcon),
					desc: R(),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: $,
					text: R()
				}, X))), h && m && r.a.createElement(s.Fragment, null, r.a.createElement(I.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.stickyIcon),
					desc: A(),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: ee,
					text: A()
				}, X))), !K && r.a.createElement(r.a.Fragment, null, (W.isApproved || W.approvedBy) && r.a.createElement(s.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.approveIcon),
					desc: Object(x.a)(W),
					id: V,
					onMouseEnter: U(V),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: V,
					text: Object(x.a)(W)
				}, X))), Object(f.a)(W) && r.a.createElement(s.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.removeIcon),
					desc: Object(x.b)(W),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: P
				}), q && r.a.createElement(p.a, {
					className: T.a.addRemovalReason,
					onClick: S,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (W.modRemovalReason || W.modNote) && r.a.createElement(L, {
					onMouseEnter: U(Q),
					onMouseLeave: P
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, M({
					tooltipId: Q,
					text: Object(x.b)(W)
				}, X))), W.bannedBy && W.isSpam && r.a.createElement(s.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.spamIcon),
					desc: Object(x.d)(W),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: Y,
					text: Object(x.d)(W)
				}, X)))), Object(v.a)(W) && !w && !K && r.a.createElement(s.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(a.a)(T.a.icon, T.a.reportIcon),
					desc: Object(x.c)(W.numReports),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: P
				}), r.a.createElement(u.c, M({
					tooltipId: Z,
					text: Object(x.c)(W.numReports)
				}, X))))
			}))
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, o) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/config.ts"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				c = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/lib/memoizeByReference/index.ts"),
				u = o("./src/reddit/actions/postCreation/general.ts"),
				p = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/reddit/constants/keycodes.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/controls/Input/index.tsx"),
				f = o("./src/reddit/icons/svgs/Close/index.tsx"),
				x = o("./src/reddit/icons/svgs/Plus/index.tsx"),
				v = o("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = o("./src/reddit/layout/row/Inline/index.tsx"),
				C = o("./src/reddit/models/PostCreationForm/index.ts"),
				O = o("./src/reddit/selectors/postCollection.ts"),
				E = o("./src/reddit/controls/MetaSeparator/index.tsx"),
				j = o("./src/reddit/components/HumanDate/index.tsx"),
				g = o("./src/reddit/helpers/name/index.ts"),
				k = o("./src/reddit/models/Subreddit/index.ts"),
				I = o("./src/reddit/models/User/index.ts"),
				y = o("./src/reddit/selectors/subreddit.ts"),
				w = o("./src/reddit/selectors/user.ts"),
				P = o("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = o.n(P),
				T = o("./src/lib/lessComponent.tsx");
			const {
				fbt: M
			} = o("./node_modules/fbt/lib/FbtPublic.js"), L = T.a.div("Container", S.a), N = T.a.h2("PostTitle", S.a), F = T.a.div("MetaLine", S.a), B = T.a.span("SubredditName", S.a), R = T.a.time("InfoSpan", S.a), A = Object(a.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: o
						}
					} = t;
					return o ? Object(y.X)(e, {
						subredditId: o
					}) : void 0
				},
				user: w.m
			});
			class D extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: o,
						onHoverActionText: n
					} = this.props, s = t && Object(k.i)(t) && o ? Object(g.e)(Object(I.e)(o)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(L, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(N, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(F, {
						"data-redditstyle": !0
					}, s && i.a.createElement(B, {
						"data-redditstyle": !0
					}, s), s && i.a.createElement(E.b, null), i.a.createElement(R, null, M._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [M._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(E.b, null), i.a.createElement(R, null, M._("created {time}", [M._param("time", i.a.createElement(j.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), n && i.a.createElement("div", {
						className: S.a.onHoverActionText
					}, i.a.createElement("span", null, n)))
				}
			}
			var U = Object(c.b)(A)(D),
				W = o("./src/reddit/helpers/trackers/postCollection.ts"),
				H = o("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				K = o.n(H);
			const X = `${n.a.assetPath}/img/snoo-drafts.png`,
				q = T.a.div("TopRow", K.a),
				V = T.a.div("TitleRow", K.a),
				J = T.a.div("DetailsContainer", K.a),
				z = T.a.wrapped(_.a, "ButtonRow", K.a),
				G = T.a.div("CloseWrapper", K.a),
				Q = T.a.wrapped(f.a, "Close", K.a),
				Z = T.a.div("Empty", K.a),
				Y = T.a.img("EmptyImage", K.a),
				$ = T.a.p("EmptyText", K.a),
				ee = T.a.div("FilterWrapper", K.a),
				te = T.a.wrapped(h.a, "FilterInput", K.a),
				oe = T.a.wrapped(v.a, "SearchIcon", K.a),
				ne = T.a.wrapped(x.a, "PlusIcon", K.a),
				se = T.a.wrapped(b.p, "CreateCollectionButton", K.a),
				re = Object(d.a)((e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(o))
				}),
				ie = Object(a.c)({
					collections: O.v
				}),
				ce = Object(c.b)(ie, (e, t) => {
					let {
						postId: o,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = C.b;
							o && (t = Object(C.u)(o, !!n)), e(Object(u.z)(t))
						}
					}
				});
			class ae extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(W.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(W.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(W.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(U, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(W.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Z, null, i.a.createElement(Y, {
						src: X
					}), i.a.createElement($, null, s.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Z, null, i.a.createElement($, null, s.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let o;
					if (0 === e.length) o = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						o = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: K.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(V, {
						"data-redditstyle": !0
					}, t || s.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(G, {
						onClick: this.close
					}, i.a.createElement(Q, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(oe, null), i.a.createElement(te, {
						placeholder: s.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(J, null, o), i.a.createElement(z, null, i.a.createElement(se, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ne, null), s.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const le = Object(l.a)(ce(Object(p.c)(ae)));
			t.a = le
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, o) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/asModal/index.tsx"),
				l = o("./src/lib/formatApiError/index.ts"),
				d = o("./src/reddit/actions/postCollection/index.ts"),
				u = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = o("./src/reddit/constants/postCreation.ts"),
				m = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/index.tsx"),
				h = o("./src/reddit/controls/Input/index.tsx"),
				f = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = o("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				v = o("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = o("./src/reddit/layout/row/Inline/index.tsx"),
				C = o("./src/reddit/selectors/postCollection.ts"),
				O = o("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				E = o.n(O),
				j = o("./src/lib/lessComponent.tsx");
			const g = j.a.div("Container", E.a),
				k = j.a.div("Content", E.a),
				I = j.a.div("TitleRow", E.a),
				y = j.a.div("Details", E.a),
				w = j.a.wrapped(u.g, "Footer", E.a),
				P = j.a.wrapped(m.o, "CancelButton", E.a),
				S = j.a.div("CloseWrapper", E.a),
				T = j.a.wrapped(v.a, "CloseIcon", E.a),
				M = j.a.label("Label", E.a),
				L = j.a.wrapped(h.a, "TitleInput", E.a),
				N = j.a.wrapped(x.a, "AddCollectionIcon", E.a),
				F = j.a.wrapped(m.l, "PrimaryActionButton", E.a),
				B = j.a.wrapped(f.a, "LoadingIcon", E.a),
				R = j.a.wrapped(b.b, "ErrorText", E.a),
				A = Object(c.c)({
					collection: C.q,
					error: C.c,
					isPending: C.g
				}),
				D = Object(i.b)(A, (e, t) => ({
					onCreate: (t, o) => e(Object(d.b)(t, o)),
					onUpdate: o => e(Object(d.h)(t.collectionId, o))
				}));
			class U extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: o
						} = this.state;
						if (e) {
							await this.props.onUpdate(o) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(o, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: o
					} = this.props, s = !e, i = !!this.state.collectionTitle.trim(), c = s ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "4yMsMq"
					});
					return r.a.createElement(g, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(k, null, s && r.a.createElement(r.a.Fragment, null, r.a.createElement(I, null, r.a.createElement(N, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(y, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(M, null, s ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(L, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(w, null, r.a.createElement(_.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(F, {
						onClick: this.onPrimaryButtonClick,
						disabled: o || !i
					}, o ? r.a.createElement(B, {
						sizePx: 10
					}) : c)), t && r.a.createElement(R, null, Object(l.a)(t))))
				}
			}
			t.a = Object(a.a)(D(U))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, o) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return g
			}));
			var n, s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				c = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				l = o("./src/reddit/components/TrackingHelper/index.tsx"),
				d = o("./src/higherOrderComponents/asModal/index.tsx"),
				u = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = o("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = o("./src/reddit/components/FlairPreview/index.tsx"),
				h = o("./src/reddit/components/FlairSearch/index.tsx"),
				f = o("./src/reddit/controls/Button/index.tsx"),
				x = o("./src/reddit/helpers/trackers/postComposer.ts"),
				v = o("./src/reddit/models/Flair/index.ts"),
				_ = o("./src/reddit/selectors/postFlair.ts"),
				C = o("./src/reddit/selectors/subreddit.ts"),
				O = o("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = o("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = o.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${o}]`
				},
				k = Object(a.c)({
					flairData: _.d,
					subreddit: C.X
				});
			class I extends i.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(x.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(x.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(O.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, o = Object(O.c)(this.props.flairs) || null;
					return Object(O.b)(e, t, o)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: o,
						flairData: n,
						subreddit: r
					} = e, c = r.displayText, {
						templates: a,
						templateIds: l
					} = n, {
						canSave: d
					} = this.canSave();
					return i.a.createElement(m.a, {
						className: o
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", c)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: v.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: v.d.LinkFlair,
						subredditId: r.id,
						templates: a,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: j.a.buttonsRow
					}, i.a.createElement(f.l, {
						disabled: !d,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.o, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const y = Object(c.b)(k, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(I);
			t.a = Object(d.a)(Object(l.c)(y))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/classNames/index.ts"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/react-router/esm/react-router.js"),
				a = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/snoovatarModal.ts"),
				d = o("./src/reddit/components/TrackingHelper/index.tsx"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				p = o("./src/reddit/helpers/trackers/snoovatar.ts"),
				m = o("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = o("./src/reddit/models/Vote/index.ts"),
				h = o("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = o.n(h);
			const {
				fbt: x
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.i)(e => {
				let {
					isHovercard: t,
					username: o,
					isAvatarPost: c,
					post: h,
					share: v
				} = e;
				const _ = Object(d.b)(),
					C = Object(i.d)(),
					O = h && h.id,
					E = h && h.voteState;
				let j = null;
				O || (j = t ? "user_hovercard" : "profile_overview");
				const g = Object(s.useCallback)(() => _(Object(p.h)(t ? "user_hovercard" : "profile_overview", o)), [t, _, o]);
				return r.a.createElement(u.t, {
					onClick: () => {
						c ? (_(p.i), O && E === b.a.notVoted && C(Object(a.ib)(O))) : g();
						const e = c ? "postify" : "copy";
						C(Object(l.b)({
							clickSource: j,
							share: v,
							source: e
						}))
					},
					className: Object(n.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: c
					}),
					isFullWidth: !0
				}, r.a.createElement(m.a, {
					className: Object(n.a)({
						[f.a.shirtIcon]: !c,
						[f.a.avatarPostButtonShirtIcon]: c
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, o) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, o) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return l
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "a", (function() {
				return p
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				a = o.n(c);
			const l = e => s.a.createElement("button", {
					className: Object(r.a)(a.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && s.a.createElement("span", {
					className: Object(r.a)(a.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				d = i.a.wrapped(l, "ApproveButton", a.a),
				u = i.a.wrapped(l, "RemoveButton", a.a),
				p = e => s.a.createElement("button", {
					className: Object(r.a)(a.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, o) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return y
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/ads/index.ts"),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/getShortenedLink.ts"),
				a = o("./node_modules/fbt/lib/FbtPublic.js");
			const l = 16765092,
				d = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				p = "avatars";
			var m = o("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = o("./src/reddit/components/AvatarPost/index.m.less"),
				h = o.n(b);
			var f = e => {
					let {
						sourceUrl: t,
						username: o,
						post: n
					} = e;
					const [r, i] = new URL(t).pathname.split("/").slice(2), c = function(e) {
						return `${d}/${+e>=l?p:u}/shared/${e}.png`
					}(i);
					return s.a.createElement("div", {
						className: h.a.avatarPostContainer
					}, s.a.createElement("img", {
						className: h.a.avatarPostImage,
						src: c,
						alt: a.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), s.a.createElement(m.a, {
						isHovercard: !1,
						username: o,
						isAvatarPost: !0,
						post: n,
						share: {
							username: r,
							avatarId: i
						}
					}))
				},
				x = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = o("./src/reddit/hooks/useIsAvatarPost.ts"),
				_ = o("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = o("./src/reddit/components/SourceLink/index.m.less"),
				O = o.n(C),
				E = o("./src/lib/lessComponent.tsx"),
				j = o("./src/telemetry/models/Outbound.ts"),
				g = o("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const k = E.a.wrapped(_.a, "OutboundLinkIcon", O.a),
				I = E.a.div("SourceLinkWrapper", O.a);

			function y(e) {
				const {
					className: t,
					post: o,
					isCommentsPage: n,
					pageLayer: a
				} = e, l = n ? j.SourceElement.PostLink : j.SourceElement.ListingPostLink, {
					source: d
				} = o, u = o.isSponsored || Object(r.u)(a), p = Object(v.a)(o), m = Object(g.a)();
				return !d || m ? null : p ? s.a.createElement(f, {
					sourceUrl: d.url,
					username: o.author,
					post: o
				}) : s.a.createElement(I, {
					className: Object(i.a)({
						[O.a["m-comment"]]: n
					}, t)
				}, s.a.createElement(x.a, {
					href: d.url,
					isSponsored: u,
					postId: o.id,
					source: d,
					sourceElement: l
				}, Object(c.a)({
					...o,
					isSponsored: u
				}), s.a.createElement(k, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, o) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/components/TrackingHelper/index.tsx"),
				i = o("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = o("./src/reddit/controls/Button/index.tsx"),
				a = o("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = o("./src/reddit/components/SubscribeButton/Inline.m.less"),
				d = o.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", d.a);
			class m extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: o,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							size: l,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: m,
							onSubscriptionsRequested: b,
							priority: h,
							isShredditParityEnabled: f,
							...x
						} = this.props, v = this.state.isHovered, _ = Object(a.a)({
							type: t.type,
							key: v ? "unsubscribe" : "subscribed"
						}), C = x.shouldReverseColor ? c.c.Secondary : c.c.Primary;
						return s.a.createElement(c.t, u({
							className: e,
							priority: h || C,
							rplStyle: f,
							text: _,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: c.d.XSP
						}, x))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: o,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							size: l,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: m,
							onSubscriptionsRequested: b,
							priority: h,
							isShredditParityEnabled: f,
							...x
						} = this.props, v = Object(a.a)({
							type: t.type,
							key: "subscribe"
						}), _ = x.shouldReverseColor ? c.c.Secondary : c.c.Primary;
						return s.a.createElement(c.t, u({
							className: e,
							priority: h || _,
							size: c.d.XSP,
							rplStyle: f,
							text: v,
							onClick: this.onClick
						}, x, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: o
					} = this.props;
					return t ? this.state.hasJustSubscribed || o ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(m))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "e", (function() {
				return c
			}));
			const n = "comment",
				s = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				c = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "f", (function() {
				return c
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "g", (function() {
				return l
			}));
			const n = "PostCreation-AddEventButton",
				s = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				c = 300,
				a = c,
				l = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return C
			})), o.d(t, "c", (function() {
				return O
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(s),
				i = o("./node_modules/raf/index.js"),
				c = o.n(i),
				a = o("./node_modules/react/index.js"),
				l = o.n(a),
				d = o("./src/lib/classNames/index.ts"),
				u = o("./src/higherOrderComponents/asModal/index.tsx"),
				p = o("./src/reddit/controls/Button/index.tsx"),
				m = o("./src/reddit/layout/row/Inline/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = o.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return l.a.createElement("div", {
						className: h.a.wrapper
					}, l.a.createElement(m.a, {
						className: h.a.titleRow
					}, o), l.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), l.a.createElement(m.a, {
						className: h.a.buttonRow
					}, l.a.createElement(p.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = o("./src/reddit/controls/ErrorText/index.m.less"),
				v = o.n(x);
			class _ extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: o,
						errorModalTitle: s = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), i && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), c && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: s
					}, o || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? l.a.createElement("div", {
						className: t
					}, i.map((e, t) => l.a.createElement(_, {
						className: o,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(C, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/controls/Input/index.m.less"),
				r = o.n(s);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, o) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = o.n(i);
			t.a = e => {
				let {
					center: t,
					className: o,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.loadingIcon, o, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/featureFlags/index.ts");

			function a(e, t, o) {
				const n = Object(i.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, i = r;
					return n ? s.a.createElement(t, i) : void 0 !== o ? s.a.createElement(o, i) : null
				})
			}
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			})), o.d(t, "c", (function() {
				return c
			})), o.d(t, "d", (function() {
				return a
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				a = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "o", (function() {
				return u
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "n", (function() {
				return h
			})), o.d(t, "m", (function() {
				return f
			})), o.d(t, "b", (function() {
				return v
			})), o.d(t, "p", (function() {
				return _
			})), o.d(t, "c", (function() {
				return C
			})), o.d(t, "j", (function() {
				return O
			})), o.d(t, "q", (function() {
				return E
			})), o.d(t, "k", (function() {
				return j
			})), o.d(t, "l", (function() {
				return g
			})), o.d(t, "i", (function() {
				return k
			})), o.d(t, "d", (function() {
				return I
			}));
			var n, s, r = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/helpers/trackers/postEvent.ts"),
				c = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const l = e => t => ({
					source: n.collection,
					noun: s.post,
					...p(t, e)
				}),
				d = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: n.collection,
						noun: o ? s.unfollow : s.follow,
						...p(e, t)
					})
				},
				u = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: o ? s.unfollow : s.follow,
						...p(e, t)
					})
				},
				p = (e, t) => {
					const o = {
						...a.o(e),
						action: r.c.CLICK,
						subreddit: a.lb(e)
					};
					return void 0 === t ? o : {
						...o,
						post: a.K(e, t),
						postCollection: a.M(e, {
							postId: t
						}),
						postEvent: a.N(e, {
							postId: t
						})
					}
				},
				m = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: s.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: s.collectionEducationGotIt
				}),
				h = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: s.eventEducation
				}),
				f = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: s.eventEducationGotIt
				}),
				x = e => ({
					...a.o(e),
					subreddit: a.lb(e),
					source: n.postComposer
				}),
				v = (e, t) => o => ({
					...p(o, e),
					source: t || n.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				_ = e => t => ({
					...p(t, e),
					source: n.collectionComposer,
					noun: s.collectionRemovePost
				}),
				C = () => e => ({
					...p(e),
					source: n.collectionComposer,
					noun: s.collectionCancel
				}),
				O = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...p(e, t),
						source: n.collectionComposer,
						noun: s.collectionCreate
					}
				},
				E = () => e => ({
					...p(e),
					source: n.collectionComposer,
					noun: s.collectionSelect
				}),
				j = e => t => ({
					...a.o(t),
					subreddit: a.lb(t),
					source: n.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: a.L(t, {
						collectionId: e
					})
				}),
				g = e => t => ({
					...p(t),
					source: n.collectionComposer,
					noun: s.collectionEdit,
					postCollection: a.L(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...p(t, e),
					source: n.collectionComposer,
					noun: s.startEvent
				}),
				I = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...p(e, t),
						source: n.collectionComposer,
						action: r.c.VIEW,
						noun: s.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "g", (function() {
				return h
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "b", (function() {
				return x
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "d", (function() {
				return _
			}));
			var n, s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				c = o("./src/reddit/constants/tracking.ts"),
				a = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const m = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(p.a)({
						...u.o(e),
						source: n.postComposer,
						action: c.c.CLICK,
						noun: "event_create",
						subreddit: u.lb(e)
					})
				},
				h = e => {
					Object(p.a)({
						...u.o(e),
						source: n.postComposer,
						action: c.c.CLICK,
						noun: "event_edit",
						subreddit: u.lb(e),
						postEvent: C(e),
						postComposer: O(e)
					})
				},
				f = () => e => ({
					source: n.eventComposer,
					action: c.c.VIEW,
					noun: c.b.SCREEN,
					actionInfo: m(e),
					postEvent: C(e)
				}),
				x = e => t => ({
					...g(t, Object(l.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: E(e)
				}),
				v = () => e => ({
					...g(e, Object(l.o)(e)),
					noun: "cancel",
					actionInfo: m(e)
				}),
				_ = e => t => ({
					...g(t, Object(l.o)(t)),
					noun: "delete",
					actionInfo: m(t),
					postComposer: O(t),
					postEvent: j(e)
				}),
				C = e => {
					const t = Object(d.p)(e);
					return t && j(t)
				},
				O = e => E(Object(d.p)(e)),
				E = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / s.Xb : void 0
					}
				},
				j = e => {
					const t = Object(i.f)(e.startDate).getTime() / s.Xb,
						o = Object(i.f)(e.endDate).getTime() / s.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(r.e)(t, o)
					}
				},
				g = (e, t) => {
					const o = {
						source: n.eventComposer,
						action: c.c.CLICK,
						subreddit: u.lb(e)
					};
					return t ? {
						...o,
						post: u.K(e, t),
						postEvent: u.N(e, {
							postId: t
						}),
						postCollection: u.M(e, {
							postId: t
						})
					} : o
				}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/react-redux/es/index.js");
			const s = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var c = o("./src/reddit/selectors/experiments/econ/index.ts");
			const a = e => Object(n.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: o,
						avatarShareUrl: n
					} = e;
					const c = i.test(n.trim()),
						a = s.includes(t),
						l = r.includes(o);
					return c && a && l
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(c.a)(t)
			})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), a.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), a.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), a.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), a.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), a.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), a.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), a.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				c = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = o.n(c);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), a.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, s.a.createElement("defs", null, s.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), s.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~PostCreation~ProfileComments~ProfileOverview~ProfilePrivate~Stan~7e460386.662520ba4f5c4a0ce6de.js.map