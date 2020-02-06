// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~ProfileComments~ProfileOvervie~630d0282.cf30204c5639596a8e6b.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~ProfileComments~ProfileOvervie~630d0282"], {
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/app/strings/index.ts"),
				o = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Input/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = n("./src/reddit/icons/svgs/Search/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/models/PostCreationForm/index.ts"),
				O = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/lib/timeAgo/index.ts"),
				j = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				w = n("./src/reddit/models/Subreddit/index.ts"),
				P = n("./src/reddit/models/User/index.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				k = n.n(I),
				M = n("./src/lib/lessComponent.tsx");
			const F = M.a.div("Container", k.a),
				S = M.a.h2("PostTitle", k.a),
				B = M.a.div("MetaLine", k.a),
				N = M.a.span("SubredditName", k.a),
				L = M.a.time("InfoSpan", k.a),
				A = Object(a.c)({
					subreddit: (e, t) => {
						let {
							collection: {
								subredditId: n
							}
						} = t;
						return n ? Object(T.Q)(e, {
							subredditId: n
						}) : void 0
					},
					user: v.i
				});
			class R extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						language: t,
						subreddit: n,
						user: o,
						onHoverActionText: r
					} = this.props, i = n && Object(w.e)(n) && o ? Object(y.c)(Object(P.f)(o)) : n ? n.displayText : "", a = e.postIds.length;
					return c.a.createElement(F, {
						onClick: this.onClick,
						className: k.a.container
					}, c.a.createElement(S, {
						"data-redditstyle": !0
					}, e.title), c.a.createElement(B, {
						"data-redditstyle": !0
					}, i && c.a.createElement(N, {
						"data-redditstyle": !0
					}, i), i && c.a.createElement(j.b, null), c.a.createElement(L, null, Object(s.c)(t, "postCreation.postsCount", a)), c.a.createElement(j.b, null), c.a.createElement(L, null, Object(s.a)(t, "postCreation.collections.creationTime", {
						time: Object(E.d)(t, e.createdAtUTC)
					}))), r && c.a.createElement("div", {
						className: k.a.onHoverActionText
					}, c.a.createElement("span", null, r)))
				}
			}
			var D = Object(i.b)(A)(R),
				H = n("./src/reddit/helpers/trackers/postCollection.ts"),
				W = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				Q = n.n(W);
			const X = Object(s.e)("postCreation.collections.collectionsListEmptyText"),
				U = Object(s.e)("postCreation.collections.noCollectionMatchingFilter"),
				V = Object(s.e)("postCreation.collections.filterPlaceholder"),
				K = Object(s.e)("postCreation.collections.collectionsListTitle"),
				q = Object(s.e)("postCreation.collections.createCollection"),
				G = "".concat(o.a.assetPath, "/img/snoo-drafts.png"),
				J = M.a.div("TopRow", Q.a),
				z = M.a.div("TitleRow", Q.a),
				Y = M.a.div("DetailsContainer", Q.a),
				Z = M.a.wrapped(g.a, "ButtonRow", Q.a),
				$ = M.a.div("CloseWrapper", Q.a),
				ee = M.a.wrapped(b.a, "Close", Q.a),
				te = M.a.div("Empty", Q.a),
				ne = M.a.img("EmptyImage", Q.a),
				se = M.a.p("EmptyText", Q.a),
				oe = M.a.div("FilterWrapper", Q.a),
				re = M.a.wrapped(_.a, "FilterInput", Q.a),
				ce = M.a.wrapped(x.a, "SearchIcon", Q.a),
				ie = M.a.wrapped(f.a, "PlusIcon", Q.a),
				ae = M.a.wrapped(h.j, "CreateCollectionButton", Q.a),
				le = Object(d.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				de = Object(a.c)({
					collections: O.v,
					language: v.P
				}),
				ue = Object(i.b)(de, (e, t) => {
					let {
						postId: n,
						isOverlay: s
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = C.b;
							n && (t = Object(C.u)(n, !!s)), e(Object(u.y)(t))
						}
					}
				});
			class pe extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(H.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(H.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(H.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => c.a.createElement(D, {
						key: e.id,
						collection: e,
						language: this.props.language,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(H.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return c.a.createElement(te, null, c.a.createElement(ne, {
						src: G
					}), c.a.createElement(se, null, X(this.props.language)))
				}
				renderNoFilterMatches() {
					return c.a.createElement(te, null, c.a.createElement(se, null, U(this.props.language)))
				}
				render() {
					const {
						collections: e,
						language: t,
						titleText: n
					} = this.props;
					let s;
					if (0 === e.length) s = this.renderNoCollections();
					else {
						const t = le(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return c.a.createElement("div", {
						className: Q.a.wrapper,
						"data-redditstyle": !0
					}, c.a.createElement(J, null, c.a.createElement(z, {
						"data-redditstyle": !0
					}, n || K(t), c.a.createElement($, {
						onClick: this.close
					}, c.a.createElement(ee, {
						"data-redditstyle": !0
					}))), c.a.createElement(oe, null, c.a.createElement(ce, null), c.a.createElement(re, {
						placeholder: V(t),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), c.a.createElement(Y, null, s), c.a.createElement(Z, null, c.a.createElement(ae, {
						onClick: this.handleCreateCollectionClicked
					}, c.a.createElement(ie, null), q(t))))
				}
			}
			const me = Object(l.a)(ue(Object(p.b)(pe)));
			t.a = me
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/constants/postCreation.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				_ = n("./src/reddit/controls/Input/index.tsx"),
				b = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				x = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/selectors/postCollection.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				E = n.n(v),
				j = n("./src/lib/lessComponent.tsx");
			const y = Object(i.e)("postCreation.cancel"),
				w = Object(i.e)("postCreation.create"),
				P = Object(i.e)("postCreation.save"),
				T = Object(i.e)("postCreation.collections.createCollection"),
				I = Object(i.e)("postCreation.collections.createModal.details"),
				k = Object(i.e)("postCreation.collections.createModal.giveATitle"),
				M = Object(i.e)("postCreation.collections.createModal.editTitle"),
				F = Object(i.e)("postCreation.collections.createModal.titlePlaceholderText"),
				S = j.a.div("Container", E.a),
				B = j.a.div("Content", E.a),
				N = j.a.div("TitleRow", E.a),
				L = j.a.div("Details", E.a),
				A = j.a.wrapped(u.e, "Footer", E.a),
				R = j.a.wrapped(m.i, "CancelButton", E.a),
				D = j.a.div("CloseWrapper", E.a),
				H = j.a.wrapped(x.a, "CloseIcon", E.a),
				W = j.a.label("Label", E.a),
				Q = j.a.wrapped(_.a, "TitleInput", E.a),
				X = j.a.wrapped(f.a, "AddCollectionIcon", E.a),
				U = j.a.wrapped(m.f, "PrimaryActionButton", E.a),
				V = j.a.wrapped(b.a, "LoadingIcon", E.a),
				K = j.a.wrapped(h.b, "ErrorText", E.a),
				q = Object(c.c)({
					collection: C.q,
					error: C.c,
					isPending: C.g,
					language: O.P
				}),
				G = Object(r.b)(q, (e, t) => ({
					onCreate: (t, n) => e(Object(d.b)(t, n)),
					onUpdate: n => e(Object(d.h)(t.collectionId, n))
				}));
			class J extends o.a.PureComponent {
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
							collectionTitle: n
						} = this.state;
						if (e) {
							await this.props.onUpdate(n) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(n, t);
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
						isPending: n,
						language: s
					} = this.props, r = !e, c = !!this.state.collectionTitle.trim(), i = r ? w : P, a = r ? k : M;
					return o.a.createElement(S, null, o.a.createElement(D, {
						onClick: this.props.onCancel
					}, o.a.createElement(H, null)), o.a.createElement(B, null, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(N, null, o.a.createElement(X, null), T(s)), o.a.createElement(L, null, I(s))), o.a.createElement(W, null, a(s), o.a.createElement(Q, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: F(s),
						value: this.state.collectionTitle
					}))), o.a.createElement(A, null, o.a.createElement(g.a, null, o.a.createElement(R, {
						onClick: this.props.onCancel
					}, y(s)), o.a.createElement(U, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !c
					}, n ? o.a.createElement(V, {
						sizePx: 10
					}) : i(s))), t && o.a.createElement(K, {
						language: s
					}, Object(l.a)(s, t))))
				}
			}
			t.a = Object(a.a)(G(J))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			}));
			var s, o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				m = n("./src/reddit/components/FlairPreview/index.tsx"),
				h = n("./src/reddit/components/FlairSearch/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/i18n/utils.ts"),
				f = n("./src/reddit/models/Flair/index.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = n.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(n, "]")
				},
				w = Object(i.c)({
					flairData: g.d,
					subreddit: C.Q,
					isMod: (e, t) => !!Object(x.j)(e, t)
				});
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(O.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(v.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(v.c)(this.props.flairs) || null;
					return Object(v.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: o
					} = e, c = o.displayText, {
						templates: i,
						templateIds: a
					} = s, {
						canSave: l
					} = this.canSave();
					return r.a.createElement(p.a, {
						className: n
					}, r.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: Object(b.c)("Select ".concat(Object(b.b)("subredditName", c), " flair"))
					}), r.a.createElement(m.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: Object(b.c)("Post Title")
					}), r.a.createElement(h.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: o.id,
						templates: i,
						templateIds: a,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: j.a.buttonsRow
					}, r.a.createElement(_.f, {
						disabled: !l,
						onClick: this.onApply
					}, Object(b.c)("Apply")), r.a.createElement(_.i, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, Object(b.c)("Clear Flair"))))
				}
			}
			const T = Object(c.b)(w, (e, t) => ({
				closeModal: () => e(Object(d.i)(t.modalId))
			}))(P);
			t.a = Object(l.a)(Object(a.b)(T))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			}));
			const s = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				c = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			}));
			const s = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				c = "PostCreation-EventEducationTooltip",
				i = 300,
				a = i,
				l = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(s),
				r = n("./node_modules/raf/index.js"),
				c = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/i18n/utils.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/higherOrderComponents/asModal/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = n.n(x);
			var C = Object(_.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return a.a.createElement("div", {
						className: g.a.wrapper
					}, a.a.createElement(f.a, {
						className: g.a.titleRow
					}, n), a.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), a.a.createElement(f.a, {
						className: g.a.buttonRow
					}, a.a.createElement(b.f, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, Object(m.c)("Ok"))))
				}),
				O = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(O);
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "c", (function() {
				return P
			}));
			const E = Object(d.c)({
				activeModalId: h.a
			});
			class j extends a.a.Component {
				constructor(e) {
					super(e), this.spanRef = a.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(o()())
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
						activeModalId: t,
						className: n,
						errorModalBody: s,
						errorModalTitle: o = Object(m.c)("Error"),
						moreText: r = Object(m.c)("More")
					} = this.props, {
						modalId: c,
						textHasOverflowed: i
					} = this.state;
					return a.a.createElement("div", {
						className: Object(u.a)(v.a.wrapper, n)
					}, a.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), i && a.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), t === c && a.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: o
					}, s || e))
				}
			}
			const y = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				w = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: o,
						messages: r = []
					} = e, c = r.length ? r : o ? [o] : [];
					return c.length ? a.a.createElement("div", {
						className: t
					}, c.map((e, t) => a.a.createElement(y, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				P = e => a.a.createElement(w, {
					fallbackMessage: Object(m.c)("Something went wrong"),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(o);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return i
			})), n.d(t, "E", (function() {
				return a
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "u", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "F", (function() {
				return x
			})), n.d(t, "C", (function() {
				return g
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "w", (function() {
				return w
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "y", (function() {
				return k
			})), n.d(t, "n", (function() {
				return M
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "D", (function() {
				return S
			})), n.d(t, "z", (function() {
				return B
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "A", (function() {
				return A
			})), n.d(t, "B", (function() {
				return R
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.n)(e)
				}),
				i = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				a = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				h = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t), {
					scheduledPost: c(e)
				}),
				_ = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t), {
					scheduledPost: c(e)
				}),
				b = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				f = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				x = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				g = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				C = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				O = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				v = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				y = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				P = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				T = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				k = (e, t, n) => c => Object.assign({
					source: "post",
					action: "click",
					noun: Object(s.k)(e)
				}, r(c), {
					actionInfo: o.actionInfo(c, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				M = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				F = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				S = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				B = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e), {
					scheduledPost: c(t)
				}),
				N = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				L = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e), {
					scheduledPost: c(t)
				}),
				A = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				R = () => (e, t) => {
					const n = r(e);
					return Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, n, {
						actionInfo: Object.assign({}, n.actionInfo, {
							reason: "failed_post"
						}),
						scheduledPost: c(t)
					})
				}
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("calendar"), a.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("live"), a.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(c);
			const a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = a
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: r,
					gutter: i
				} = e, u = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", l({
					className: Object(c.a)(a.a.expandRightContainer, t)
				}, u), o.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: r,
						height: s,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), o.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~ProfileComments~ProfileOvervie~630d0282.cf30204c5639596a8e6b.js.map