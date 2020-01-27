// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21.75a73cdeb4ac947df76c.js
// Retrieved at 1/27/2020, 4:40:17 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"], {
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				C = s("./src/reddit/icons/svgs/Close/index.tsx"),
				b = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/models/PostCreationForm/index.ts"),
				E = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				O = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				I = s("./src/reddit/helpers/name/index.ts"),
				T = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				M = s.n(P),
				N = s("./src/lib/lessComponent.tsx");
			const B = N.a.div("Container", M.a),
				S = N.a.h2("PostTitle", M.a),
				k = N.a.div("MetaLine", M.a),
				F = N.a.span("SubredditName", M.a),
				L = N.a.time("InfoSpan", M.a),
				A = Object(c.c)({
					subreddit: (e, t) => {
						let {
							collection: {
								subredditId: s
							}
						} = t;
						return s ? Object(y.S)(e, {
							subredditId: s
						}) : void 0
					},
					user: _.i
				});
			class R extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						language: t,
						subreddit: s,
						user: o,
						onHoverActionText: r
					} = this.props, i = s && Object(T.e)(s) && o ? Object(I.c)(Object(w.f)(o)) : s ? s.displayText : "", c = e.postIds.length;
					return a.a.createElement(B, {
						onClick: this.onClick,
						className: M.a.container
					}, a.a.createElement(S, {
						"data-redditstyle": !0
					}, e.title), a.a.createElement(k, {
						"data-redditstyle": !0
					}, i && a.a.createElement(F, {
						"data-redditstyle": !0
					}, i), i && a.a.createElement(j.b, null), a.a.createElement(L, null, Object(n.c)(t, "postCreation.postsCount", c)), a.a.createElement(j.b, null), a.a.createElement(L, null, Object(n.a)(t, "postCreation.collections.creationTime", {
						time: Object(O.d)(t, e.createdAtUTC)
					}))), r && a.a.createElement("div", {
						className: M.a.onHoverActionText
					}, a.a.createElement("span", null, r)))
				}
			}
			var D = Object(i.b)(A)(R),
				X = s("./src/reddit/helpers/trackers/postCollection.ts"),
				W = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				H = s.n(W);
			const U = Object(n.e)("postCreation.collections.collectionsListEmptyText"),
				K = Object(n.e)("postCreation.collections.noCollectionMatchingFilter"),
				J = Object(n.e)("postCreation.collections.filterPlaceholder"),
				V = Object(n.e)("postCreation.collections.collectionsListTitle"),
				G = Object(n.e)("postCreation.collections.createCollection"),
				Q = "".concat(o.a.assetPath, "/img/snoo-drafts.png"),
				Z = N.a.div("TopRow", H.a),
				z = N.a.div("TitleRow", H.a),
				q = N.a.div("DetailsContainer", H.a),
				Y = N.a.wrapped(v.a, "ButtonRow", H.a),
				$ = N.a.div("CloseWrapper", H.a),
				ee = N.a.wrapped(C.a, "Close", H.a),
				te = N.a.div("Empty", H.a),
				se = N.a.img("EmptyImage", H.a),
				ne = N.a.p("EmptyText", H.a),
				oe = N.a.div("FilterWrapper", H.a),
				re = N.a.wrapped(h.a, "FilterInput", H.a),
				ae = N.a.wrapped(f.a, "SearchIcon", H.a),
				ie = N.a.wrapped(b.a, "PlusIcon", H.a),
				ce = N.a.wrapped(x.j, "CreateCollectionButton", H.a),
				le = Object(d.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				de = Object(c.c)({
					collections: E.v,
					language: _.T
				}),
				pe = Object(i.b)(de, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = g.b;
							s && (t = Object(g.u)(s, !!n)), e(Object(p.y)(t))
						}
					}
				});
			class me extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(X.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(X.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(X.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => a.a.createElement(D, {
						key: e.id,
						collection: e,
						language: this.props.language,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(X.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return a.a.createElement(te, null, a.a.createElement(se, {
						src: Q
					}), a.a.createElement(ne, null, U(this.props.language)))
				}
				renderNoFilterMatches() {
					return a.a.createElement(te, null, a.a.createElement(ne, null, K(this.props.language)))
				}
				render() {
					const {
						collections: e,
						language: t,
						titleText: s
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = le(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return a.a.createElement("div", {
						className: H.a.wrapper,
						"data-redditstyle": !0
					}, a.a.createElement(Z, null, a.a.createElement(z, {
						"data-redditstyle": !0
					}, s || V(t), a.a.createElement($, {
						onClick: this.close
					}, a.a.createElement(ee, {
						"data-redditstyle": !0
					}))), a.a.createElement(oe, null, a.a.createElement(ae, null), a.a.createElement(re, {
						placeholder: J(t),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), a.a.createElement(q, null, n), a.a.createElement(Y, null, a.a.createElement(ce, {
						onClick: this.handleCreateCollectionClicked
					}, a.a.createElement(ie, null), G(t))))
				}
			}
			const ue = Object(l.a)(pe(Object(m.b)(me)));
			t.a = ue
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				O = s.n(_),
				j = s("./src/lib/lessComponent.tsx");
			const I = Object(i.e)("postCreation.cancel"),
				T = Object(i.e)("postCreation.create"),
				w = Object(i.e)("postCreation.save"),
				y = Object(i.e)("postCreation.collections.createCollection"),
				P = Object(i.e)("postCreation.collections.createModal.details"),
				M = Object(i.e)("postCreation.collections.createModal.giveATitle"),
				N = Object(i.e)("postCreation.collections.createModal.editTitle"),
				B = Object(i.e)("postCreation.collections.createModal.titlePlaceholderText"),
				S = j.a.div("Container", O.a),
				k = j.a.div("Content", O.a),
				F = j.a.div("TitleRow", O.a),
				L = j.a.div("Details", O.a),
				A = j.a.wrapped(p.e, "Footer", O.a),
				R = j.a.wrapped(u.i, "CancelButton", O.a),
				D = j.a.div("CloseWrapper", O.a),
				X = j.a.wrapped(f.a, "CloseIcon", O.a),
				W = j.a.label("Label", O.a),
				H = j.a.wrapped(h.a, "TitleInput", O.a),
				U = j.a.wrapped(b.a, "AddCollectionIcon", O.a),
				K = j.a.wrapped(u.f, "PrimaryActionButton", O.a),
				J = j.a.wrapped(C.a, "LoadingIcon", O.a),
				V = j.a.wrapped(x.b, "ErrorText", O.a),
				G = Object(a.c)({
					collection: g.q,
					error: g.c,
					isPending: g.g,
					language: E.T
				}),
				Q = Object(r.b)(G, (e, t) => ({
					onCreate: (t, s) => e(Object(d.b)(t, s)),
					onUpdate: s => e(Object(d.h)(t.collectionId, s))
				}));
			class Z extends o.a.PureComponent {
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
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
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
						isPending: s,
						language: n
					} = this.props, r = !e, a = !!this.state.collectionTitle.trim(), i = r ? T : w, c = r ? M : N;
					return o.a.createElement(S, null, o.a.createElement(D, {
						onClick: this.props.onCancel
					}, o.a.createElement(X, null)), o.a.createElement(k, null, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(F, null, o.a.createElement(U, null), y(n)), o.a.createElement(L, null, P(n))), o.a.createElement(W, null, c(n), o.a.createElement(H, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: B(n),
						value: this.state.collectionTitle
					}))), o.a.createElement(A, null, o.a.createElement(v.a, null, o.a.createElement(R, {
						onClick: this.props.onCancel
					}, I(n)), o.a.createElement(K, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !a
					}, s ? o.a.createElement(J, {
						sizePx: 10
					}) : i(n))), t && o.a.createElement(V, {
						language: n
					}, Object(l.a)(n, t))))
				}
			}
			t.a = Object(c.a)(Q(Z))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			}));
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				u = s("./src/reddit/components/FlairPreview/index.tsx"),
				x = s("./src/reddit/components/FlairSearch/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				O = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(O);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				T = Object(i.c)({
					flairData: v.d,
					subreddit: g.S,
					isMod: (e, t) => !!Object(f.j)(e, t)
				});
			class w extends r.a.Component {
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
						subreddit: Object(E.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, a = o.displayText, {
						templates: i,
						templateIds: c
					} = n, {
						canSave: l
					} = this.canSave();
					return r.a.createElement(m.a, {
						className: s
					}, r.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: Object(C.c)("Select ".concat(Object(C.b)("subredditName", a), " flair"))
					}), r.a.createElement(u.a, {
						flair: t,
						flairTemplateType: b.d.LinkFlair,
						placeholderText: Object(C.c)("Post Title")
					}), r.a.createElement(x.a, {
						flair: t,
						flairTemplateType: b.d.LinkFlair,
						subredditId: o.id,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: j.a.buttonsRow
					}, r.a.createElement(h.f, {
						disabled: !l,
						onClick: this.onApply
					}, Object(C.c)("Apply")), r.a.createElement(h.i, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, Object(C.c)("Clear Flair"))))
				}
			}
			const y = Object(a.b)(T, (e, t) => ({
				closeModal: () => e(Object(d.i)(t.modalId))
			}))(w);
			t.a = Object(l.a)(Object(c.b)(y))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(i);
			const l = a.a.span("TextWrapper", c.a),
				d = a.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(l, null, e.text, " ")), "Button", c.a),
				p = a.a.wrapped(d, "ApproveButton", c.a),
				m = a.a.wrapped(d, "RemoveButton", c.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/monthsToMinutes.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: c.T,
				subscribeReminderTooltipId: a.C,
				subscribeTooltipId: a.D,
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				a = "PostCreation-EventEducationTooltip",
				i = 300,
				c = i,
				l = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(n),
				r = s("./node_modules/raf/index.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(f);
			var g = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: v.a.wrapper
					}, c.a.createElement(b.a, {
						className: v.a.titleRow
					}, s), c.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), c.a.createElement(b.a, {
						className: v.a.buttonRow
					}, c.a.createElement(C.f, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, Object(u.c)("Ok"))))
				}),
				E = s("./src/reddit/controls/ErrorText/index.m.less"),
				_ = s.n(E);
			s.d(t, "a", (function() {
				return T
			})), s.d(t, "c", (function() {
				return w
			}));
			const O = Object(d.c)({
				activeModalId: x.a
			});
			class j extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
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
					a()(() => {
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
						className: s,
						errorModalBody: n,
						errorModalTitle: o = Object(u.c)("Error"),
						moreText: r = Object(u.c)("More")
					} = this.props, {
						modalId: a,
						textHasOverflowed: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(p.a)(_.a.wrapper, s)
					}, c.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, r), t === a && c.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const I = Object(l.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(j),
				T = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, a = r.length ? r : o ? [o] : [];
					return a.length ? c.a.createElement("div", {
						className: t
					}, a.map((e, t) => c.a.createElement(I, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => c.a.createElement(T, {
					fallbackMessage: Object(u.c)("Something went wrong"),
					messages: e
				});
			t.b = I
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = s.n(a);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(i.a.loadingIcon, s, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("calendar"), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("sticky"), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: i
				} = e, p = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", l({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, p), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21.75a73cdeb4ac947df76c.js.map